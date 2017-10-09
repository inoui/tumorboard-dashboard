import { autoinject, bindable } from 'aurelia-framework';
import { Box } from '../../../services/boxes.service';
import * as interact from 'interactjs';
import { LogManager, Logger} from '../../../services/logger.service';

@autoinject
export class BoxCustomElement {

  @bindable
  public content: Box;
  public element: Element;
  public style: String;
  private logger: Logger;
  private GRID_SIZE = 20;

  constructor() {
    this.logger = LogManager.getLogger('AppViewModel');
  }

  public attached(): void {
    interact(this.element).draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
        restriction: '.page-host',
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: false,

      // call this function on every dragmove event
      onmove: dragMoveListener,
      // call this function on every dragend event
      onend: (event) => {
        // TODO: move underlying boxes
      }
    });

    //this.element.onpointerdown = mouseDownListener;
    let dis = this;

    interact(this.element).resizable({
      preserveAspectRatio: false,
      edges: { left: true, right: true, bottom: true, top: true }
    })
    .on('resizemove', function (event): void {
      let target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);

      let newWidth = event.rect.width - event.rect.width % 20;
      let newHeight = event.rect.height - event.rect.height % 20;

      // update the element's style
      target.style.width = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    });

    function dragMoveListener(event): void {
      let target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy,
        oldZIndex = target.style.zIndex === undefined ? 0 : target.style.zIndex;

      dis.logger.info('old zindex of ' + target + ' : ' + target.style.zIndex);

      target.style.zIndex = 10;
      dis.logger.info('new zindex of ' + target + ' : ' + target.style.zIndex);
      // translate the element
      target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      //target.style.zIndex = oldZIndex;
      //dis.logger.info('new old zindex of ' + target + ' : ' + target.style.zIndex);
    }

    /*function mouseDownListener(event): void {
      event.target.style.zIndex = 10;
    }*/

  }

}