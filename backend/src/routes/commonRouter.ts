import { Router } from 'express'
import { postDebugDatum } from '../controlers/postDebugDatum'
import { postExperiment } from '../controlers/postExperiment'
import { getNextExperimentID } from '../controlers/getNextExperimentID'

const commonRouter = Router()

commonRouter.post('/debugDatum', postDebugDatum)

commonRouter.get('/experiment/nextID', getNextExperimentID)
commonRouter.post('/experiment', postExperiment)

export default commonRouter
