import { Logger } from '../../../../utils/Logger';

export class VideoEventsMonitor {
  private video: HTMLVideoElement | null = null;
  private interval: ReturnType<typeof setInterval> | null = null;
  private logger: Logger = new Logger('[VideoEventsMonitor]', false);

  constructor() {}

  public init = (): void => {
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
      };

      this.video.onseeking = (e) => {
        this.logger.log('SEEKING');
      };

      this.video.onseeked = (e) => {
        this.logger.log('SEEKED');
      };

      this.video.onplaying = (e) => {
        this.logger.log('PLAYING');
      };

      this.video.onfullscreenchange = (e) => {
        this.logger.log('FULLSCREEN CHANGE');
      };
    } else {
      throw new Error('Video element unavailable');
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
        // Found a buffered range that contains the video's currentTime
        return true;
      }
    }
    return false;
  };

  private checkBuffering = (): void => {
    const isBuffering = !this.isPlayerInBuffer();
    if (isBuffering === true) {
      this.logger.log('BUFFERING');
    }
  };
}
