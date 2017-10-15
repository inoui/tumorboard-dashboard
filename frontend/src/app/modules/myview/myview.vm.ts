import { autoinject, bindable } from 'aurelia-framework';
import { LogManager, Logger} from './../../services/logger.service';
import { BoxService, Box } from './../../services/boxes.service';
import { PatientService, Patient, PatientServiceObserver } from './../../services/patient.service';

import * as interact from 'interactjs';

@autoinject
export class MyViewViewModel implements PatientServiceObserver {
  private logger: Logger;
	public heading: string = 'My new wonderful title';

  @bindable
  public boxes: Box[] = [];
  public patients: Patient[] = [];
  public selectedPatient: Patient;
  public actionOptions = {
    overlap: 0.1
  };

	constructor(
    private boxService: BoxService,
    private patientService: PatientService
  ) {
		this.logger = LogManager.getLogger('myview');
  }
	public async activate(): Promise<void> {
    this.patients = await this.patientService.getPatients();
	}

  public attached(): void {
    this.patientService.registerObserver(this);
  }

  public onClickPrint(): void {
    this.logger.info('print button was clicked');
  }

  public onClickExchangeView(): void {
    this.logger.info('exchange view button was clicked');
  }

  public onClickAddBox(): void {
    this.logger.info('add box button was clicked');
  }

  public onClickSettings(): void {
    this.logger.info('settings button was clicked');
  }

  public async update(): Promise<void> {
    let patient: Patient = this.patientService.getSelectedPatient();
    if (patient === undefined) {
      this.patientService.setSelectedPatient(this.patients[0]);
      patient = this.patients[0];
    }
    this.boxes = await this.boxService.getBoxesForPatient(patient);
  }

}
