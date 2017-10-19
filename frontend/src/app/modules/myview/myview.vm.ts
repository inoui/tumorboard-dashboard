import { autoinject, bindable } from 'aurelia-framework';
import { LogManager, Logger} from './../../services/logger.service';
import { BoxService, Box } from './../../services/boxes.service';
import { ClientService, Client, ClientServiceObserver } from './../../services/client.service';

import * as interact from 'interactjs';

@autoinject
export class MyViewViewModel implements ClientServiceObserver {
  private logger: Logger;
	public heading: string = 'My new wonderful title';

  @bindable
  public boxes: Box[] = [];
  public clients: Client[] = [];
  public selectedClient: Client;
  public actionOptions = {
    overlap: 0.1
  };

	constructor(
    private boxService: BoxService,
    private clientService: ClientService
  ) {
		this.logger = LogManager.getLogger('myview');
  }
	public async activate(): Promise<void> {
    this.clients = await this.clientService.getClients();
	}

  public attached(): void {
    this.clientService.registerObserver(this);
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
    let client: Client = this.clientService.getSelectedClient();
    if (client === undefined) {
      this.clientService.setSelectedClient(this.clients[0]);
      client = this.clients[0];
    }
    this.boxes = await this.boxService.getBoxesForClient(client);
  }

}
