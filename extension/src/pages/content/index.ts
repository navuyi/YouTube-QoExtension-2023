import { VariablesStorage } from '../../utils/storage/ChromeStorage';
import { KeyboardTracker } from './models/KeyboardTracker';
import { MouseTracker } from './models/MouseTracker';
import { NetworkThrottler } from './models/NetworkThrottler';
import { DebugDataMonitor } from './models/video/DebugDataMonitor';
import { PlayerEventMonitor } from './models/video/PlayerEventMonitor';
import { AssessmentController } from './models/assessment/AssessmentController';

const init = async () => {
  const running = await VariablesStorage.getItem('running');
  if (!running) {
    console.log('Experiment is not running');
    return;
  }

  const debugDataMonitor = new DebugDataMonitor();
  const videoEventsMonitor = new PlayerEventMonitor();
  const mouseTracker = MouseTracker.getInstance();
  const keyboardTracker = KeyboardTracker.getInstance();
  const throttler = NetworkThrottler.getInstance();
  const assessmentController = AssessmentController.getInstance();

  /**
   * Event is fired when page is loaded and data is updated
   * Fired on both navigation forward and navigating back
   */
  window.addEventListener('onbeforeunload', (e) => {
    e.preventDefault();
    console.log('onbeforeunload');
  });

  window.addEventListener('yt-page-data-updated', (e) => {
    if (window.location.href.includes('https://www.youtube.com/watch?v=')) {
      debugDataMonitor.init();
      videoEventsMonitor.init();
    } else {
      debugDataMonitor.stop();
      videoEventsMonitor.stop();
    }
    console.log('yt-page-data-updated');
  });

  window.addEventListener('yt-navigate-finish', (e) => {
    console.log('yt-navigate-finish');
  });

  /**
   * Event is fired when page starts to navigate.
   * There is no guarantee that page data is updated - stick to yt-page-data-updated
   */
  window.addEventListener('yt-navigate-start', (e) => {
    console.log(e);
    console.log('yt-navigate-start');
  });

  window.addEventListener('load', function () {
    console.log('load');
  });

  mouseTracker.init();
  keyboardTracker.init();
  throttler.init();
  assessmentController.init();
};

init();
