import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { Box } from '../../../services/boxes.service';
import * as interact from 'interactjs';
import { LogManager, Logger } from '../../../services/logger.service';
import { PatientService, Patient, PatientServiceObserver } from '../../../services/patient.service';

@autoinject
export class PatientFooterLinkCustomElement implements PatientServiceObserver {

  @bindable
  public patient: Patient;

  @bindable
  public isSelected: Boolean;

  private logger: Logger;

  constructor(
    private patientService: PatientService
  ) {
    this.logger = LogManager.getLogger('PatientFooterLink');
  }

  public attached(): void {
    this.patientService.registerObserver(this);
  }

  public selectPatient(): void {
    this.patientService.setSelectedPatient(this.patient);
  }

  public update(): void {
    this.isSelected = this.patientService.isSelected(this.patient);
  }

}
