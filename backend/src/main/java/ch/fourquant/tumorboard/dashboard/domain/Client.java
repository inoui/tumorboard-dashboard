package ch.fourquant.tumorboard.dashboard.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "firstname")
    private String firstName;

    @NotNull
    @Column(name = "birtdate")
    private Date birthdate;

    @OneToMany(targetEntity = Box.class)
    private List<Box> boxes;

    public Client() {
        super();
    }

    public Client(String name, String firstName, Date birthdate) {
        super();
        this.name = name;
        this.firstName = firstName;
        this.birthdate = birthdate;
        boxes = new ArrayList<>();
    }

    public Client(Client clone) {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Client {" +
                " id = " + id +
                ", name = '" + name + '\'' +
                ", firstName = '" + firstName + '\'' +
                ", birthdate = " + birthdate +
                ", boxes = " + boxes +
                " }";
    }
}
