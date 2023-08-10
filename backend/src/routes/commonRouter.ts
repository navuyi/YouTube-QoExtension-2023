import { Router } from 'express'
import { postDebugDatum } from '../controlers/postDebugDatum'
import { postExperiment } from '../controlers/postExperiment'

const commonRouter = Router()

commonRouter.post('/debugDatum', postDebugDatum)
commonRouter.post('/experiment', postExperiment)

export default commonRouter
