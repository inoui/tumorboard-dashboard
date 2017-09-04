package ch.fourquant.tumorboard.dashboard.domain;

import javax.validation.constraints.NotNull;

public class Box {

	private String id;

	@NotNull
	private String title;

	@NotNull
	private String description;

	public Box() {
	}
	
	public Box(Box clone) {
		title = clone.getTitle();
		description = clone.getDescription();
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getId() {
		return id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

}
