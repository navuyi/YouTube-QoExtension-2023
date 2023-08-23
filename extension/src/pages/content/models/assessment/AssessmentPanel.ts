import { CSSProperties } from 'react';
import { createBackground } from './elements/createBackground';

export class AssessmentPanel {
  private rootElement: HTMLDivElement | null = null;

  public init = async () => {
    this.createAssessmentPanel();

    // ! TEMPORARY - DEV ONLY
    window.addEventListener('keydown', (e) => {
      if (e.key === 'P' && e.shiftKey === true) {
        this.showAssessmentPanel();
      } else if (e.key === 'O' && e.shiftKey === true) {
        this.hideAssessmentPanel();
      }
    });
  };

  public showAssessmentPanel = () => {
    if (this.rootElement) {
      this.rootElement.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    }
  };

  private hideAssessmentPanel = () => {
    if (this.rootElement) {
      this.rootElement.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    }
  };

  private createAssessmentPanel = () => {
    this.rootElement = createBackground();
    document.body.insertBefore(this.rootElement, document.body.firstChild);
  };

  private static destroyAssessmentPanel = () => {};
}
