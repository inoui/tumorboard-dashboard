import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { Box } from '../../../services/boxes.service';
import * as interact from 'interactjs';
import { LogManager, Logger } from '../../../services/logger.service';
import { ClientService, Client, ClientServiceObserver } from '../../../services/client.service';

@autoinject
export class ClientFooterLinkCustomElement implements ClientServiceObserver {

  @bindable
  public client: Client;

  @bindable
  public isSelected: Boolean;

  private logger: Logger;

  constructor(
    private clientService: ClientService
  ) {
    this.logger = LogManager.getLogger('ClientFooterLink');
  }

  public attached(): void {
    this.clientService.registerObserver(this);
  }

  public selectClient(): void {
    this.clientService.setSelectedClient(this.client);
  }

  public update(): void {
    this.isSelected = this.clientService.isSelected(this.client);
  }

}
