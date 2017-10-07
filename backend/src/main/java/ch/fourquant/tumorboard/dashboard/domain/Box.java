package ch.fourquant.tumorboard.dashboard.domain;

import javax.validation.constraints.NotNull;

public class Box extends BusinessEntity {

    @NotNull
    private String title;

    @NotNull
    private String description;

    public Box() {
        super();
    }

    public Box(Box clone) {
        super(clone);
        title = clone.getTitle();
        description = clone.getDescription();
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

}
