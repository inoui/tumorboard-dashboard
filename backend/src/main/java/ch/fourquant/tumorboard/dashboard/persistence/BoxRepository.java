package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.Box;

import java.util.ArrayList;
import java.util.List;

// TODO: Make this injectable using @Scanned or alike.
public class BoxRepository extends MockRepository<Box> {

    @Override
    protected Box getNewInstance(Box clone) {
        return new Box(clone);
    }

    public Box save(Box savingBox) {
        Box target = findById(savingBox.getId());
        if (target == null) {
            Box newBox = new Box(savingBox);
            objects.add(newBox);
            return newBox;
        } else {
            target.setDescription(savingBox.getDescription());
            target.setTitle(savingBox.getTitle());
            return target;
        }
    }

}
