import { Router } from 'express'
import { postDebugDatum } from '../controlers/postDebugDatum'
import { postExperiment } from '../controlers/postExperiment'
import { getNextExperimentID } from '../controlers/getNextExperimentID'
import { postMouseEvent } from '../controlers/postMouseEvent'
import { postPlayerEvent } from '../controlers/postPlayerEvent'
import { postScrollEvent } from '../controlers/postScrollEvent'

const commonRouter = Router()

commonRouter.post('/debugDatum', postDebugDatum)

commonRouter.get('/experiment/nextID', getNextExperimentID)
commonRouter.post('/experiment', postExperiment)
commonRouter.post('/mouseEvent', postMouseEvent)
commonRouter.post('/playerEvent', postPlayerEvent)
commonRouter.post('/scrollEvent', postScrollEvent)

export default commonRouter
