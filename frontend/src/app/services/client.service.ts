import { autoinject } from 'aurelia-framework';
import { LogManager, Logger} from './logger.service';
import { RestClient } from './rest/rest-client.service';
import { Box } from './boxes.service';

export interface Client {
  id: string;
  name: string;
  firstName: string;
  boxes: Box[];
}

export interface ClientServiceObserver {
  update(): void;
}

@autoinject
export class ClientService {

  private logger: Logger;
  private clients: Client[] = [];
  private selectedClient: Client;
  private observers: ClientServiceObserver[] = [];

  constructor(
    private restClient: RestClient) {
    this.logger = LogManager.getLogger('ClientService');
  }

  public getSelectedClient(): Client {
    return this.selectedClient;
  }

  public isSelected(client: Client): Boolean {
    if (client === undefined || this.selectedClient === undefined) {
      return false;
    }
    return this.selectedClient.firstName === client.firstName && this.selectedClient.name === client.name;
  }

  public async getClients(): Promise<Client[]> {
		let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Client[]>('/clients');
    return res;
  }

  public async getClient(id: string): Promise<Client> {
    let res = await this.restClient
      .useAPI()
      .withJsonHeaders()
      .fetchGet<Client>('/clients/' + id);
    return res;
  }

  public setSelectedClient(client: Client): void {
    this.selectedClient = client;
    this.logger.info('client selected! ' + client.firstName);
    this.notifyObservers();
  }

  public notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  public registerObserver(observer: ClientServiceObserver): void {
    this.observers.push(observer);
    observer.update();
  }
}
