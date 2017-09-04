package ch.fourquant.tumorboard.dashboard.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ch.fourquant.tumorboard.dashboard.domain.BoxController;

@SpringBootApplication(scanBasePackageClasses = { BoxController.class })
public class DashboardRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(DashboardRestApplication.class, args);
	}
}
