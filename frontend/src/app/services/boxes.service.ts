import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest/rest-client.service';
import { Client, ClientService } from './client.service';

export interface Box {
  title: string;
  description: string;
}

@autoinject
export class BoxService {

  constructor(
    private restClient: RestClient,
    private clientService: ClientService
  ) {}

  public async getBoxes(): Promise<Box[]> {
		let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Box[]>('/boxes');
    return res;
  }

  public async getBoxesForClient(client: Client): Promise<Box[]> {
   return this.clientService.getClient(client.id).then(result => result.boxes);
  }
}
