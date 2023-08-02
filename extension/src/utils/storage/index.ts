export interface ExperimentVariables {
    running: boolean
    nextBitrateChange: string | null
    nextAssessment: string | null
}

export interface ExperimentSettings {
    bitrateScenario: number[] | null
    bitrateIntervalMs: number
}

const ExperimentVariablesDefault : ExperimentVariables = {
    running: false,
    nextBitrateChange: null,
    nextAssessment: null
}

const ExperimentSettingsDefault : ExperimentSettings = {
    bitrateScenario: [200e3, 250e3, 500e3],
    bitrateIntervalMs: 5000
}

export const StorageDefault = {
    ...ExperimentVariablesDefault,
    ... ExperimentSettingsDefault
}