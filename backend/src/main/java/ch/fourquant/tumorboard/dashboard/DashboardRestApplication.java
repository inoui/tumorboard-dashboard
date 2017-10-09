package ch.fourquant.tumorboard.dashboard;

import ch.fourquant.tumorboard.dashboard.rest.BoxController;
import ch.fourquant.tumorboard.dashboard.rest.DashboardRestController;
import ch.fourquant.tumorboard.dashboard.rest.PatientController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = {"ch.fourquant.tumorboard.dashboard"})
@SpringBootApplication()
public class DashboardRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(DashboardRestApplication.class, args);
    }
}
