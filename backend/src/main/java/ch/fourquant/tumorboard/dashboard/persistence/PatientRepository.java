package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.Box;
import ch.fourquant.tumorboard.dashboard.domain.Patient;
import ch.fourquant.tumorboard.dashboard.domain.Patient;

import java.util.ArrayList;
import java.util.List;

// TODO: Make this injectable using @Scanned or alike.
public class PatientRepository extends MockRepository<Patient> {

    @Override
    protected Patient getNewInstance(Patient clone) {
        return new Patient(clone);
    }

    @Override
    public Patient save(Patient savingPatient) {
        Patient target = findById(savingPatient.getId());
        if (target == null) {
            Patient newPatient = new Patient(savingPatient);
            objects.add(newPatient);
            return newPatient;
        } else {
            target.setName(savingPatient.getName());
            target.setFirstName(savingPatient.getFirstName());
            target.setBirthdate(savingPatient.getBirthdate());
            return target;
        }
    }


}
