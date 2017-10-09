package ch.fourquant.tumorboard.dashboard.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "box")
public class Box {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "description")
    private String description;

    @NotNull
    private Long patientId;

    public Box() {
        super();
    }

    public Box(Box clone) {
        title = clone.getTitle();
        description = clone.getDescription();
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Box {" +
                " id = " + id +
                ", title = '" + title + '\'' +
                ", description = '" + description + '\'' +
                ", patient = " + patientId +
                " }";
    }
}
