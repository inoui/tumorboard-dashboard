import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest/rest-client.service';
import { Patient, PatientService } from './patient.service';

export interface Box {
  title: string;
  description: string;
}

@autoinject
export class BoxService {

  constructor(
    private restClient: RestClient,
    private patientService: PatientService
  ) {}

  public async getBoxes(): Promise<Box[]> {
		let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Box[]>('/boxes');
    return res;
  }

  public async getBoxesForPatient(patient: Patient): Promise<Box[]> {
   return this.patientService.getPatient(patient.id).then(result => result.boxes);
  }
}
