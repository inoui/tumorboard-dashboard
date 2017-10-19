import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { LogManager, Logger} from '../../../services/logger.service';
import { ClientService, Client } from '../../../services/client.service';

@autoinject
export class FooterCustomElement {
  private logger: Logger;

  @bindable
  public clients: Client[] = [];

	constructor(
    private clientService: ClientService
  ) {
		this.logger = LogManager.getLogger('Footer');
  }

 	public async attached(): Promise<void> {
    this.clients = await this.clientService.getClients();
	}

}
