import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { LogManager, Logger} from '../../../services/logger.service';
import { PatientService, Patient } from '../../../services/patient.service';

@autoinject
export class FooterCustomElement {
  private logger: Logger;

  @bindable
  public patients: Patient[] = [];

	constructor(
    private patientService: PatientService
  ) {
		this.logger = LogManager.getLogger('Footer');
  }

 	public async attached(): Promise<void> {
    this.patients = await this.patientService.getPatients();
	}

}
