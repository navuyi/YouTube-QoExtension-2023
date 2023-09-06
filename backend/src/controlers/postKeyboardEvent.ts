import { Request, Response, NextFunction } from 'express'
import { ExperimentRepository } from '../database/repositories/experiment.repository'
import { CustomError } from '../utils/CustomError'
import { KeyboardEventRepository } from '../database/repositories/keyboardEvent.repository'

export interface PostKeyboardEventRequestBody {
  experimentID: number
  altKey: boolean
  shiftKey: boolean
  ctrlKey: boolean
  key: string
  timestamp: string
}

export const postKeyboardEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { experimentID, ...data } = req.body as PostKeyboardEventRequestBody
    const experiment = await ExperimentRepository.findOne({ where: { id: experimentID } })
    if (!experiment) {
      throw new CustomError('Experiment does not exist', 400)
    }

    const evt = KeyboardEventRepository.create({
      experiment: experiment,
      ...data,
    })
    await KeyboardEventRepository.save(evt)

    res.status(201).json({ msg: 'OK' })
  } catch (err) {
    next(err)
  }
}
