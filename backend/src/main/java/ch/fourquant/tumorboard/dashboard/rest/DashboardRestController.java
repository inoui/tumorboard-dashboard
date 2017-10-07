package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.BusinessEntity;
import ch.fourquant.tumorboard.dashboard.domain.Patient;
import ch.fourquant.tumorboard.dashboard.persistence.MockRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

public abstract class DashboardRestController<T extends BusinessEntity> {

    protected abstract MockRepository<T> getRepository();

    protected abstract T updateEntity(T entity, T update);

    @CrossOrigin(allowedHeaders = {"Content-Type"}, origins = {"*"})
    @GetMapping
    public ResponseEntity<List<T>> findAll() {
        List<T> objects = getRepository().findAll();
        return new ResponseEntity<>(objects, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public ResponseEntity<T> findById(@PathVariable String id) {
        T entity = getRepository().findById(id);
        if (entity != null) {
            return new ResponseEntity<>(entity, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<T> create(@Valid @RequestBody T savingEntity, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
        T entity = getRepository().save(savingEntity);
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        T entity = getRepository().findById(id);
        if (entity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        getRepository().delete(entity);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PutMapping(path = "/{id}")
    public ResponseEntity<T> create(@PathVariable String id, @Valid @RequestBody T update, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
        T entity = getRepository().findById(id);
        if (entity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        entity = updateEntity(entity, update);
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }
}
