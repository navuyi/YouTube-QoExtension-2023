import { NextFunction, Request, Response } from 'express'
import { ExperimentRepository } from '../database/repositories/experiment.repository'
import { ScrollEventRepository } from '../database/repositories/scrollEvent.repository'

export interface PostScrollEventRequestBody {
  experimentID: number
  timestamp: string
  scrollX: number
  scrollY: number
  url: string
}

export const postScrollEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { experimentID, ...data } = req.body as PostScrollEventRequestBody
    const experiment = await ExperimentRepository.findOne({ where: { id: experimentID } })
    if (!experiment) {
      throw new Error(`Experiment with id ${experimentID} not found`)
    }
    const scrollEvtData = {
      ...data,
      experiment: experiment,
    }
    const playerEvent = ScrollEventRepository.create(scrollEvtData)
    await ScrollEventRepository.save(playerEvent)

    res.status(201).json({ msg: 'OK' })
  } catch (err) {
    next(err)
  }
}
