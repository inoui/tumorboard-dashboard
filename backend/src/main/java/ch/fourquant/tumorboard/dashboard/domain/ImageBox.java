package ch.fourquant.tumorboard.dashboard.domain;

import javax.persistence.*;

@Entity
@Table(name="imagebox")
public class ImageBox extends Box {

    @Column(length = 1_000_000)
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
