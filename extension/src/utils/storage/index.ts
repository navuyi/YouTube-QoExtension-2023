export interface ExperimentVariables {
    running: boolean
    nextBitrateChange: Date | null
    nextAssessment: Date | null
}

export interface ExperimentSettings {
    subjectID: number | null
    subjectAge: number | null
    subjectSex: "male" | "female" | "undisclosed" | null
    bitrateScenario: number[] | null
}


export const ExperimentVariablesDefault : ExperimentVariables = {
    running: false,
    nextBitrateChange: null,
    nextAssessment: null
}

export const ExperimentSettingsDefault : ExperimentSettings = {
    subjectAge: null,
    subjectID: null,
    subjectSex: null,
    bitrateScenario: null
}