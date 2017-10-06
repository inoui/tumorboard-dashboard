package ch.fourquant.tumorboard.dashboard.domain;

import ch.fourquant.tumorboard.dashboard.persistence.BoxRepository;
import org.springframework.web.bind.annotation.RequestMapping;

import ch.fourquant.tumorboard.dashboard.persistence.MockRepository;

@RequestMapping("/boxes")
public class BoxController extends DashboardRestController<Box> {

	private BoxRepository repository;

	// TODO: use @Inject/@Autowired to automatically inject service over controller ->
	// testability
	public BoxController() {
		repository = new BoxRepository();
	}

	@Override
	protected MockRepository<Box> getRepository() {
		return repository;
	}

	@Override
	protected Box updateEntity(Box box, Box update) {
		box.setTitle(update.getTitle());
		box.setDescription(update.getDescription());
		box = repository.save(box);
		return box;
	}


}
