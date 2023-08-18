import { api } from '../../../API/api';
import { VariablesStorage } from '../../../utils/storage/ChromeStorage';

export interface MouseEventData {
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  offsetX: number;
  offsetY: number;
  clientX: number;
  clientY: number;

  scrollX: number;
  scrollY: number;

  type: CustomMouseEventType;
  url: string;
  timestamp: string;

  element: {
    className: string;
    tag: string;
    id: string;
    baseURI: string;
  };
}
export interface ScrollEventData {
  scrollX: number;
  scrollY: number;
}
export type CustomMouseEventType =
  | 'mousedown'
  | 'mouseup'
  | 'mousemove'
  | 'drag';

export class MouseTracker {
  private static instance: MouseTracker | null = null;
  private leftButtonPressed: boolean = false;

  private constructor() {}

  public static getInstance = () => {
    if (!MouseTracker.instance) {
      MouseTracker.instance = new MouseTracker();
    }
    return MouseTracker.instance;
  };

  public init = () => {
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
      //this.handleMouseEvent(e, 'mousemove'); // <-- not sending mousemove update due to high load
    }
  };

  private handleScroll = (e: Event) => {
    const data: ScrollEventData = {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };
  };

  private handleMouseEvent = async (
    e: MouseEvent,
    type: CustomMouseEventType
  ) => {
    const target = e.target as HTMLElement;
    const experimentID = await VariablesStorage.getItem('experimentID');

    const data: any = {
      experimentID: experimentID,

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
