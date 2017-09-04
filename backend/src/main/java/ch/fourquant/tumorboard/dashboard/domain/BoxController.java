package ch.fourquant.tumorboard.dashboard.domain;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.fourquant.tumorboard.dashboard.persistence.MockRepository;

@RestController
@RequestMapping("/boxes")
public class BoxController {

	private MockRepository boxRepository;

	// TODO: use @Inject/@Autowired to automatically inject service over controller ->
	// testability
	public BoxController() {
		boxRepository = new MockRepository();
	}

	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<Box>> findAll() {
		List<Box> boxes = boxRepository.findAll();
		return new ResponseEntity<List<Box>>(boxes, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/{id}")
	public ResponseEntity<Box> findById(@PathVariable String id) {
		Box box = boxRepository.findById(id);
		if (box != null) {
			return new ResponseEntity<Box>(box, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@CrossOrigin
	@PostMapping
	public ResponseEntity<Box> create(@Valid @RequestBody Box savingbOX, BindingResult result) {
		if (result.hasErrors()) {
			return new ResponseEntity<Box>(HttpStatus.PRECONDITION_FAILED);
		}
		Box box = boxRepository.save(savingbOX);
		return new ResponseEntity<Box>(box, HttpStatus.CREATED);
	}

	@CrossOrigin
	@PutMapping(path = "/{id}")
	public ResponseEntity<Box> create(@PathVariable String id, @Valid @RequestBody Box update, BindingResult result) {
		if (result.hasErrors()) {
			return new ResponseEntity<Box>(HttpStatus.PRECONDITION_FAILED);
		}
		Box box = boxRepository.findById(id);
		if (box == null) {
			return new ResponseEntity<Box>(HttpStatus.NOT_FOUND);
		}
		box.setTitle(update.getTitle());
		box.setDescription(update.getDescription());
		box = boxRepository.save(box);
		return new ResponseEntity<Box>(box, HttpStatus.CREATED);
	}

	@CrossOrigin
	@DeleteMapping(path = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable String id) {
		Box entity = boxRepository.findById(id);
		if (entity == null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		boxRepository.delete(entity);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

}
