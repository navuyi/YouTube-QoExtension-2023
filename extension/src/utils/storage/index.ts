export interface ExperimentVariables {
    running: boolean
    nextBitrateChange: string | null
    nextAssessment: string | null
}

export interface ExperimentSettings {
    subjectID: number | null
    subjectAge: number | null
    subjectSex: "male" | "female" | "undisclosed" | null
    bitrateScenario: number[] | null
}


const ExperimentVariablesDefault : ExperimentVariables = {
    running: false,
    nextBitrateChange: null,
    nextAssessment: null
}

const ExperimentSettingsDefault : ExperimentSettings = {
    subjectAge: null,
    subjectID: null,
    subjectSex: null,
    bitrateScenario: null
}

export const StorageDefault = {
    ...ExperimentVariablesDefault,
    ... ExperimentSettingsDefault
}