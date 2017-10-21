package ch.fourquant.tumorboard.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="textbox")
public class TextBox extends Box {
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
