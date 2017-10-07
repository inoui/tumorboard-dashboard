package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.Box;
import ch.fourquant.tumorboard.dashboard.domain.Patient;
import ch.fourquant.tumorboard.dashboard.persistence.MockRepository;
import ch.fourquant.tumorboard.dashboard.persistence.PatientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/patients")
public class PatientController extends DashboardRestController<Patient> {

    private PatientRepository repository;

    // TODO: use @Inject/@Autowired to automatically inject service over controller ->
    // testability
    public PatientController() {
        repository = new PatientRepository();
    }

    public MockRepository getRepository() {
        return repository;
    }

    @CrossOrigin
    @PutMapping(path = "/{id}/box")
    public ResponseEntity<Patient> addBox(@PathVariable String id, @Valid @RequestBody Box box) {
        Patient patient = repository.findById(id);
        patient.addBox(box);
        patient = repository.save(patient);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }


    protected Patient updateEntity(Patient patient, @Valid @RequestBody Patient update) {
        patient.setName(update.getName());
        patient.setFirstName(update.getFirstName());
        patient.setBirthdate(update.getBirthdate());
        patient = repository.save(patient);
        return patient;
    }


}
