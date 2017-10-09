package ch.fourquant.tumorboard.dashboard.domain;

import javax.persistence.*;
import java.util.UUID;

@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type",discriminatorType=DiscriminatorType.STRING)
@DiscriminatorValue(value="BusinessEntity")
public class BusinessEntity {

    @Id
    @GeneratedValue
    @org.springframework.data.annotation.Id
    private String id;

    public BusinessEntity(){
        id = UUID.randomUUID().toString();
    }

    public BusinessEntity(BusinessEntity clone) {
        if (clone.id == null) {
            id = UUID.randomUUID().toString();
        } else {
            id = clone.id;
        }

    }

    public String getId() {
        return id;
    }

}
