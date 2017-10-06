package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.BusinessEntity;

import java.util.ArrayList;
import java.util.List;


// TODO: Make this injectable using @Scanned or alike.
public abstract class MockRepository<T extends BusinessEntity> {

	protected ArrayList<T> objects;

	public MockRepository() {
		objects = new ArrayList<>();
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return (List<T>) objects.clone();
	}

	public T findById(String id) {
		return getNewInstance(objects.stream().filter(e -> e.getId() == id).findFirst().get());
	}

	protected abstract T getNewInstance(T clone);

	public abstract T save(T savingEntity);

	public void delete(T entity) {
		objects.remove(entity);
	}

}
