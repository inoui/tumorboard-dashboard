package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.Patient;
import ch.fourquant.tumorboard.dashboard.persistence.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patients")
public class PatientController extends DashboardRestController<Patient> {

    @Autowired
    private PatientRepository repository;

    @Override
    public CrudRepository<Patient, Long> getRepository() {
        return repository;
    }

}
