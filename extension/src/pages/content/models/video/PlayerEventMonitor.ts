import { Logger } from '../../../../utils/Logger';
import { VariablesStorage } from '../../../../utils/storage/ChromeStorage';
import { api } from '../../../../API/api';
import { DateTime } from 'luxon';

export type VideoEvent =
  | 'PLAYING'
  | 'PAUSED'
  | 'SEEKING'
  | 'SEEKED'
  | 'BUFFERING';

export class PlayerEventMonitor {
  private video: HTMLVideoElement | null = null;
  private interval: ReturnType<typeof setInterval> | null = null;
  private logger: Logger = new Logger('[VideoEventsMonitor]', true);
  private experimentID: number | null = null;

  constructor() {}

  public init = async (): Promise<void> => {
    this.experimentID = await VariablesStorage.getItem('experimentID');
    const video = document.querySelector('video') as HTMLVideoElement;
    if (!video) {
      setTimeout(() => {
        this.init(); // <-- retrying in 500 ms
      }, 500);
      return;
    }
    this.video = video;

    this.stop();
    this.start();
  };

  private start = (): void => {
    if (this.video) {
      this.interval = setInterval(() => {
        this.checkBuffering();
      }, 50);

      this.video.onpause = (e) => {
        this.logger.log('PAUSED');
        this.handleEvent('PAUSED');
      };

      this.video.onseeking = (e) => {
        this.logger.log('SEEKING');
        this.handleEvent('SEEKING');
      };

      this.video.onseeked = (e) => {
        this.logger.log('SEEKED');
        this.handleEvent('SEEKED');
      };

      this.video.onplaying = (e) => {
        this.logger.log('PLAYING');
        this.handleEvent('PLAYING');
      };
    } else {
      throw new Error('Video element unavailable');
    }
  };

  private handleEvent = async (name: string) => {
    try {
      const data = {
        experimentID: this.experimentID,
        timestamp: DateTime.local().toISO(),
        name,
      };
      await api.playerEvent.post(data);
    } catch (err) {
      console.log(err);
    }
  };

  public stop = (): void => {
    if (this.video) {
      this.video.onpause = null;
      this.video.onplaying = null;
    }
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  private isPlayerInBuffer = (): boolean => {
    if (!this.video) {
      throw new Error('Video element unavailable');
    }
    const buffered = this.video.buffered;
    for (let i = 0; i < buffered.length; i++) {
      const start = buffered.start(i);
      const end = buffered.end(i);
      const currentTime = this.video.currentTime;

      const inside = currentTime >= start && currentTime <= end;
      if (inside) {
        return true;
      }
    }
    return false;
  };

  private checkBuffering = (): void => {
    const isBuffering = !this.isPlayerInBuffer();
    if (isBuffering === true) {
      this.logger.log('BUFFERING');
      this.handleEvent('BUFFERING');
    }
  };
}
