import { autoinject } from 'aurelia-framework';
import { LogManager, Logger} from './logger.service';
import { RestClient } from './rest/rest-client.service';
import { Box } from './boxes.service';

export interface Patient {
  id: string;
  name: string;
  firstName: string;
  boxes: Box[];
}

export interface PatientServiceObserver {
  update(): void;
}

@autoinject
export class PatientService {

  private logger: Logger;
  private patients: Patient[] = [];
  private selectedPatient: Patient;
  private observers: PatientServiceObserver[] = [];

  constructor(
    private restClient: RestClient) {
    this.logger = LogManager.getLogger('PatientService');
  }

  public getSelectedPatient(): Patient {
    return this.selectedPatient;
  }

  public isSelected(patient: Patient): Boolean {
    if (patient === undefined || this.selectedPatient === undefined) {
      return false;
    }
    return this.selectedPatient.firstName === patient.firstName && this.selectedPatient.name === patient.name;
  }

  public async getPatients(): Promise<Patient[]> {
		let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Patient[]>('/patients');
    return res;
  }

  public async getPatient(id: string): Promise<Patient> {
    let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Patient>('/patients/' + id);
    return res;
  }

  public setSelectedPatient(patient: Patient): void {
    this.selectedPatient = patient;
    this.logger.info('patient selected! ' + patient.firstName);
    this.notifyObservers();
  }

  public notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  public registerObserver(observer: PatientServiceObserver): void {
    this.observers.push(observer);
    observer.update();
  }
}
