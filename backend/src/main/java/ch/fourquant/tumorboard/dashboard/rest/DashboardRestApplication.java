package ch.fourquant.tumorboard.dashboard.rest;

import ch.fourquant.tumorboard.dashboard.domain.BoxController;
import ch.fourquant.tumorboard.dashboard.domain.DashboardRestController;
import ch.fourquant.tumorboard.dashboard.domain.PatientController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackageClasses = { BoxController.class, PatientController.class, DashboardRestController.class })
public class DashboardRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(DashboardRestApplication.class, args);
	}
}
