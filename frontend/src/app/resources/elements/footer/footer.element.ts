import { autoinject } from 'aurelia-framework';
import { LogManager, Logger} from '../../../services/logger.service';
import { PatientService, Patient } from '../../../services/patient.service';

@autoinject
export class FooterCustomElement {
  private logger: Logger;
  public patients: Patient[] = [];

	constructor(
    private patientService: PatientService
  ) {
		this.logger = LogManager.getLogger('Footer');
  }

  public async activate(): Promise<void> {
    this.logger.info('activating...');
    this.patients = await this.patientService.getPatients();
    this.logger.info(this.patients.length + ' ');
	}

}
