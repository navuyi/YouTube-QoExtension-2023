import { DateTime, Duration } from 'luxon';
import { SettingsStorage } from '../../../../utils/storage/ChromeStorage';
import { Logger } from '../../../../utils/Logger';
import { VariablesStorage } from '../../../../utils/storage/ChromeStorage';

export class AssessmentController {
  private static instance: AssessmentController;
  private assessmentInterval: ReturnType<typeof setInterval> | null = null;
  private videoInterval: ReturnType<typeof setInterval> | null = null;
  private logger: Logger = new Logger('[AssessmentController]', true);

  private assessmentTimeout: number | null = null;
  private assessmentRetryTimeout: number | null = null;

  public static getInstance(): AssessmentController {
    if (!AssessmentController.instance) {
      AssessmentController.instance = new AssessmentController();
    }
    return AssessmentController.instance;
  }

  public init = async () => {
    const started = await VariablesStorage.getItem('assessmentStarted');
    if (started === true) {
      const waitingForVideo = await VariablesStorage.getItem(
        'assessmentWaitingForVideo'
      );
      if (waitingForVideo === true) {
        this.logger.log('Waiting for the subject to enter YT video');
        this.waitForVideo();
      } else {
        this.logger.log('Waiting for the next assessment');
        this.waitForAssessment();
      }
    } else {
      this.logger.log('Starting assessment');
      this.scheduleNextAssessment('long');
      await VariablesStorage.setItem('assessmentStarted', true);
      this.waitForAssessment();
    }
  };

  private waitForAssessment = () => {
    this.assessmentInterval = setInterval(async () => {
      this.logger.log('Waiting for next assessment time');
      const now = DateTime.now();
      const nextISO = await VariablesStorage.getItem('nextAssessment');
      const next = DateTime.fromISO(nextISO);
      if (now > next) {
        if (this.assessmentInterval) {
          clearInterval(this.assessmentInterval);
        }
        if (window.location.href.includes('https://www.youtube.com/watch?v=')) {
          this.stopWaitingForAssessment();
          this.showAssessmentPanel();
        } else {
          await VariablesStorage.setItem('assessmentWaitingForVideo', true);
          this.waitForVideo();
        }
      }
    }, 1000);
  };

  private stopWaitingForAssessment = () => {
    this.logger.log("Stopping assessment's waiting");
    if (this.assessmentInterval) {
      clearInterval(this.assessmentInterval);
    }
  };

  private waitForVideo = () => {
    this.videoInterval = setInterval(async () => {
      this.logger.log('Waiting for video');
      if (window.location.href.includes('https://www.youtube.com/watch?v=')) {
        this.stopWaitingForVideo();
        await VariablesStorage.setItem('assessmentWaitingForVideo', false);
        this.scheduleNextAssessment('short');
        this.waitForAssessment();
      }
    }, 1000);
  };

  private stopWaitingForVideo = () => {
    this.logger.log('Stopping waiting for video');
    if (this.videoInterval) {
      clearInterval(this.videoInterval);
    }
  };

  private scheduleNextAssessment = async (type: 'short' | 'long') => {
    let delta: number;
    switch (type) {
      case 'short':
        delta = await SettingsStorage.getItem('assessmentRetryTimeout');
        break;
      case 'long':
        delta = await SettingsStorage.getItem('assessmentTimeout');
        break;
      default:
        delta = await SettingsStorage.getItem('assessmentTimeout');
        break;
    }
    this.logger.log(`Scheduling next assessment in ${delta} ms`);
    const next = DateTime.now().plus({ milliseconds: delta });
    await VariablesStorage.setItem('nextAssessment', next.toISO());
  };

  private showAssessmentPanel = async () => {
    this.logger.log('Displaying assessment panel');
    window.alert('Assessment panel');
    this.scheduleNextAssessment('long');
    this.waitForAssessment();
  };
}
