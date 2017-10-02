import { autoinject } from 'aurelia-framework';
import { LogManager, Logger} from './../../services/logger.service';
import { BoxService, Box } from './../../services/boxes.service';
import * as interact from 'interactjs';

@autoinject
export class MyViewViewModel {
  private logger: Logger;
	public heading: string = 'My new wonderful title';
  public boxes: Box[] = [];
  public actionOptions = {
    overlap: 0.1
  };

	constructor(
    private boxService: BoxService
  ) {
		this.logger = LogManager.getLogger('myview');
  }
	public async activate(): Promise<void> {
    this.boxes = await this.boxService.getBoxes();
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

}
