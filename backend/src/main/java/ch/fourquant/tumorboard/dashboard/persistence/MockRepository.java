package ch.fourquant.tumorboard.dashboard.persistence;

import java.util.ArrayList;
import java.util.List;

import ch.fourquant.tumorboard.dashboard.domain.Box;

// TODO: Make this injectable using @Scanned or alike.
public class MockRepository {

	private ArrayList<Box> objects;

	public MockRepository() {
		objects = new ArrayList<>();
	}

	@SuppressWarnings("unchecked")
	public List<Box> findAll() {
		return (List<Box>) objects.clone();
	}

	public Box findById(String id) {
		return new Box(objects.stream().filter(e -> e.getId() == id).findFirst().get());
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
			String id = objects.size() + savingBox.hashCode() + "";
			savingBox.setId(id);
			Box newBox = new Box(savingBox);
			newBox.setId(id);
			objects.add(newBox);
			Box result = new Box(newBox);
			result.setId(id);
			return result;
		}
	}

	public void delete(Box entity) {
		objects.remove(entity);
	}

}
