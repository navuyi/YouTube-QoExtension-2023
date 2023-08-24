import { DateTime } from 'luxon';
import { api } from '../../../API/api';
import { VariablesStorage } from '../../../utils/storage/ChromeStorage';
import { CustomMouseEventType } from '../../../types/mouseEvent.type';
import { ScrollEventData } from '../../../types/mouseEvent.type';
import { MouseEventData } from '../../../types/mouseEvent.type';

export class MouseTracker {
  private static instance: MouseTracker | null = null;
  private leftButtonPressed: boolean = false;
  private experimentID: number | null = null;

  public static getInstance = () => {
    if (!MouseTracker.instance) {
      MouseTracker.instance = new MouseTracker();
    }
    return MouseTracker.instance;
  };

  public init = async () => {
    this.experimentID = await VariablesStorage.getItem('experimentID');

    window.onmousedown = this.handleMousePressed.bind(this);
    window.onmouseup = this.handleMousePressed.bind(this);
    window.onmousemove = this.handleMouseMove.bind(this);
    window.onscroll = this.handleScroll.bind(this);
  };

  private handleMousePressed = (e: MouseEvent) => {
    if (e.type === 'mousedown' && e.button === 0) {
      this.leftButtonPressed = true;
      this.handleMouseEvent(e, 'mousedown');
    } else if (e.type === 'mouseup' && e.button === 0) {
      this.leftButtonPressed = false;
      this.handleMouseEvent(e, 'mouseup');
    }
  };

  private handleMouseMove = (e: MouseEvent) => {
    if (this.leftButtonPressed === true) {
      this.handleMouseEvent(e, 'drag');
    } else {
      // this.handleMouseEvent(e, 'mousemove'); // <-- not sending mousemove update due to high load
    }
  };

  private handleScroll = (e: Event) => {
    const data: ScrollEventData = {
      experimentID: this.experimentID as number,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      url: window.location.href,
      timestamp: DateTime.now().toISO() as string,
    };
    api.scrollEvent.post(data);
  };

  private handleMouseEvent = async (
    e: MouseEvent,
    type: CustomMouseEventType
  ) => {
    const target = e.target as HTMLElement;

    const data: any = {
      experimentID: this.experimentID,

      pageX: e.pageX,
      pageY: e.pageY,
      screenX: e.screenX,
      screenY: e.screenY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      clientX: e.clientX,
      clientY: e.clientY,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      type: type,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      element: {
        className: target.className,
        tag: target.tagName,
        id: target.id,
        baseURI: target.baseURI,
      },
    };
    try {
      api.mouseEvent.post(data);
    } catch (err) {
      console.log('Error sending mouse data!');
    }
  };
}
