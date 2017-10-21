package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.Box;
import ch.fourquant.tumorboard.dashboard.domain.Client;
import ch.fourquant.tumorboard.dashboard.persistence.BoxRepository;
import ch.fourquant.tumorboard.dashboard.persistence.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/boxes")
public class BoxController extends DashboardRestController<Box> {
    private static final Logger LOGGER = Logger.getLogger(BoxController.class.getName());

    @Autowired
    private BoxRepository repository;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    protected CrudRepository getRepository() {
        return repository;
    }

    @Override
    @CrossOrigin
    @PostMapping
    public ResponseEntity<Box> create(@Valid @RequestBody Box savingEntity, BindingResult result) {
        LOGGER.log(Level.INFO, savingEntity.toString());
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.PRECONDITION_FAILED);
        }
        Box newBox = repository.save(savingEntity);
        Client targetClient = clientRepository.findOne(savingEntity.getClientId());
        targetClient.addBox(newBox);
        clientRepository.save(targetClient);
        return new ResponseEntity<>(newBox, HttpStatus.CREATED);
    }
}
