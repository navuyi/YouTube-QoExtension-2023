export interface ExperimentVariables {
  running: boolean
  nextBitrateChange: string | null
  experimentID: number | null

  nextAssessment: string | null
  assessmentStarted: boolean
  assessmentWaitingForVideo: boolean
}

export interface ExperimentSettings {
  bitrateScenario: number[] | null
  bitrateIntervalMs: number
  assessmentTimeoutMs: number
  assessmentRetryTimeoutMs: number
  assessmentQuestion: string
  useAssessments: boolean
  useRandomBitrateOrder: boolean
}

const ExperimentVariablesDefault: ExperimentVariables = {
  running: false,
  nextBitrateChange: null,
  experimentID: null,

  nextAssessment: null,
  assessmentStarted: false,
  assessmentWaitingForVideo: false,
}

export const ExperimentSettingsDefault: ExperimentSettings = {
  bitrateScenario: [200e3, 250e3, 500e3, 750e3, 800e3, 900e3], // bps
  bitrateIntervalMs: 5000,
  assessmentTimeoutMs: 10000,
  assessmentRetryTimeoutMs: 5000,
  assessmentQuestion: 'Proszę ocenić jakość serwisu od strony audio-wizualnej',
  useAssessments: true,
  useRandomBitrateOrder: false,
}

export const StorageDefault = {
  ...ExperimentVariablesDefault,
  ...ExperimentSettingsDefault,
}
