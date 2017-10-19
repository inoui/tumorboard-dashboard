import { autoinject } from 'aurelia-framework';
import { RestClient } from './rest/rest-client.service';

export interface Box {
  title: string;
  description: string;
}

@autoinject
export class BoxService {

  constructor(
    private restClient: RestClient
  ) {}

  public async getBoxes(): Promise<Box[]> {
		let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Box[]>('/boxes');
    return res;
  }

  // todo update box when position or size changes
}
