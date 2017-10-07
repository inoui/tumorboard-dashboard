package ch.fourquant.tumorboard.dashboard.domain;

import java.util.UUID;

public class BusinessEntity {

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
