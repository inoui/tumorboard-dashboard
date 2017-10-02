import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest/rest-client.service';

export interface Patient {
  name: string;
  active: boolean;
}

@autoinject
export class PatientService {

  constructor(
    private restClient: RestClient
  ) {}

  public async getPatients(): Promise<Patient[]> {
		/*let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Patient[]>('/patients');*/
      let res = [{
        'name' : 'Max Muster',
        'active' : true
      },
      {
        'name' : 'Peter Spühler',
        'active' : false
      }];
    return res;
  }
}
