package ch.fourquant.tumorboard.dashboard.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackageClasses = { BoxController.class, PatientController.class, DashboardRestController.class })
public class DashboardRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(DashboardRestApplication.class, args);
	}
}
