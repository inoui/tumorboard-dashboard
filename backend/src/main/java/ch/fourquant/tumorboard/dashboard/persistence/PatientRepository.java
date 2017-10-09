package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Long> {

}
