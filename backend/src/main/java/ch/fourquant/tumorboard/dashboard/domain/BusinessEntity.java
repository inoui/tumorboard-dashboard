package ch.fourquant.tumorboard.dashboard.domain;

import java.util.UUID;

public class BusinessEntity {

    private String id;

    public BusinessEntity(){
        id = new UUID(31L, 17L).toString();
    }

    public BusinessEntity(BusinessEntity clone) {
        if (clone.id == null) {
            id = new UUID(31L, 17L).toString();
        } else {
            id = clone.id;
        }

    }

    public String getId() {
        return id;
    }

}
