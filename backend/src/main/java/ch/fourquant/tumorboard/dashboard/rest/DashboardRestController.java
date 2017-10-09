package ch.fourquant.tumorboard.dashboard.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.logging.Level;

public abstract class DashboardRestController<T> {
    private static final Logger LOGGER = Logger.getLogger(DashboardRestController.class.getName());
    protected abstract CrudRepository<T, Long> getRepository();

    @CrossOrigin(allowedHeaders = {"Content-Type"}, origins = {"*"})
    @GetMapping
    public ResponseEntity<List<T>> findAll() {
        List<T> objects = new ArrayList<>();
        getRepository().findAll().forEach(objects::add);
        return new ResponseEntity<>(objects, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public ResponseEntity<T> findById(@PathVariable Long id) {
        T entity = getRepository().findOne(id);
        if (entity != null) {
            return new ResponseEntity<>(entity, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<T> create(@Valid @RequestBody T savingEntity, BindingResult result) {
        LOGGER.log(Level.INFO, savingEntity.toString());
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
        T entity = getRepository().save(savingEntity);
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        T entity = getRepository().findOne(id);
        if (entity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        getRepository().delete(entity);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PutMapping(path = "/{id}")
    public ResponseEntity<T> create(@PathVariable Long id, @Valid @RequestBody T update, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
        T entity = getRepository().findOne(id);
        if (entity == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        T saved = getRepository().save(entity);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
