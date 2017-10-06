package ch.fourquant.tumorboard.dashboard.domain;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Patient extends BusinessEntity {

    @NotNull
    private String name;

    @NotNull
    private String firstName;

    @NotNull
    private Date birthdate;

    private List<Box> boxes;

    public Patient(String name, String firstName, Date birthdate) {
        super();
        this.name = name;
        this.firstName = firstName;
        this.birthdate = birthdate;
        boxes = new ArrayList<>();
    }

    public Patient(Patient clone) {
        super(clone);
        name = clone.name;
        firstName = clone.firstName;
        birthdate = clone.birthdate;
    }

    public boolean addBox(Box box) {
        return boxes.add(box);
    }

    public List<Box> getBoxes() {
        return boxes;
    }

    public void setBoxes(List<Box> boxes) {
        this.boxes = boxes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

}
