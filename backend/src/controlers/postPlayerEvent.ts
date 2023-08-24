import { NextFunction, Request, Response } from 'express'
import { ExperimentRepository } from '../database/repositories/experiment.repository'
import { PlayerEventRepository } from '../database/repositories/playerEvent.repository'
import { CustomError } from '../utils/CustomError'

export interface PostPlayerEventRequestBody {
  experimentID: number
  timestamp: string
  name: string
}

export const postPlayerEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { experimentID, ...data } = req.body as PostPlayerEventRequestBody
    const experiment = await ExperimentRepository.findOne({ where: { id: experimentID } })
    if (!experiment) {
      throw new CustomError(`Experiment with id ${experimentID} not found`, 400)
    }
    const playerEvtData = {
      ...data,
      experiment: experiment,
    }
    const playerEvent = PlayerEventRepository.create(playerEvtData)
    await PlayerEventRepository.save(playerEvent)

    res.status(201).json({ msg: 'OK' })
  } catch (err) {
    next(err)
  }
}
