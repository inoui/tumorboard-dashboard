package ch.fourquant.tumorboard.dashboard.persistence;

import ch.fourquant.tumorboard.dashboard.domain.BusinessEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Stream;


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
		Stream<T> stream = objects.stream().filter(e -> e.getId() == id);
		try {
			T foundEntity = stream.findFirst().get();
			T newInstance = getNewInstance(foundEntity);
			return newInstance;
		} catch (NoSuchElementException e) {
			// TODO: maybe log something here
			// This is okay, the element could not be found. Therefore we simply return null
			return null;
		}
	}

	protected abstract T getNewInstance(T clone);

	public abstract T save(T savingEntity);

	public void delete(T entity) {
		objects.remove(entity);
	}

}
