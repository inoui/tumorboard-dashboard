package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.Box;

import java.util.ArrayList;
import java.util.List;

// TODO: Make this injectable using @Scanned or alike.
public class BoxRepository extends  MockRepository<Box> {

	@Override
	protected Box getNewInstance(Box clone) {
		return new Box(clone);
	}

	public Box save(Box savingBox) {
		if (savingBox.getId() != null) {
			Box target = findById(savingBox.getId());
			if (target == null) {
				throw new IllegalArgumentException(
						"No box found with id [" + savingBox.getId() + "]. Provide a new box without id to persist.");
			} else {
				target.setDescription(savingBox.getDescription());
				target.setTitle(savingBox.getTitle());
			}
			return new Box(savingBox);
		} else {
			Box newBox = new Box(savingBox);
			objects.add(newBox);
			Box result = new Box(newBox);
			return result;
		}
	}

}
