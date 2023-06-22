export interface ExperimentVariables {
    running: boolean
    nextBitrateChange: Date
    nextAssessment: Date
}

export interface ExperimentSettings {
    subjectID: number
    subjectAge: number
    bitrateScenario: number[]
}