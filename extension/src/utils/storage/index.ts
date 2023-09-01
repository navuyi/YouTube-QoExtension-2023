export interface ExperimentVariables {
  running: boolean
  nextBitrateChange: string | null
  experimentID: number | null

  nextAssessment: string | null
  experimentFinishes: string | null
  assessmentStarted: boolean
  assessmentWaitingForVideo: boolean
}

export interface ExperimentSettings {
  experimentDurationMs: number
  bitrateScenario: number[] | null
  bitrateIntervalMs: number
  assessmentTimeoutMs: number
  assessmentRetryTimeoutMs: number
  assessmentQuestion: string
  useAssessments: boolean
}

const ExperimentVariablesDefault: ExperimentVariables = {
  running: false,
  nextBitrateChange: null,
  experimentID: null,
  experimentFinishes: null,

  nextAssessment: null,
  assessmentStarted: false,
  assessmentWaitingForVideo: false,
}

export const ExperimentSettingsDefault: ExperimentSettings = {
  experimentDurationMs: 0.5 * 1e3 * 60,
  bitrateScenario: [200e3, 250e3, 500e3, 750e3, 800e3, 900e3], // bps
  bitrateIntervalMs: 15e3, // time between network throttling changes
  assessmentTimeoutMs: 150e3, // time before next assessment panel shows up
  assessmentRetryTimeoutMs: 30e3, // retry time if the assessment was opened outside of the video
  assessmentQuestion: 'Proszę ocenić jakość serwisu od strony audio-wizualnej', // text visible on the assessment panel
  useAssessments: false, // enable/disable assessments
}

export const StorageDefault = {
  ...ExperimentVariablesDefault,
  ...ExperimentSettingsDefault,
}
