import { Router } from 'express'
import { postDebugDatum } from '../controlers/postDebugDatum'
import { postExperiment } from '../controlers/postExperiment'
import { getNextExperimentID } from '../controlers/getNextExperimentID'
import { postMouseEvent } from '../controlers/postMouseEvent'
import { postPlayerEvent } from '../controlers/postPlayerEvent'
import { postScrollEvent } from '../controlers/postScrollEvent'
import { postAssessment } from '../controlers/postAssessment'

const commonRouter = Router()

commonRouter.post('/debugDatum', postDebugDatum)

commonRouter.get('/experiment/next/id', getNextExperimentID)
commonRouter.post('/experiment', postExperiment)
commonRouter.post('/mouseEvent', postMouseEvent)
commonRouter.post('/playerEvent', postPlayerEvent)
commonRouter.post('/scrollEvent', postScrollEvent)
commonRouter.post('/assessment', postAssessment)

export default commonRouter
