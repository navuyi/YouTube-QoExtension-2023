import { Request, Response, NextFunction } from 'express'
import { MouseEventRepository } from '../database/repositories/mouseEvent.repository'
import { ExperimentRepository } from '../database/repositories/experiment.repository'
import { CustomError } from '../utils/CustomError'

export interface PostMouseEventRequestBody {
  pageX: number
  pageY: number
  screenX: number
  screenY: number
  offsetX: number
  offsetY: number
  clientX: number
  clientY: number

  scrollX: number
  scrollY: number

  type: string
  url: string

  timestamp: string
  experimentID: number

  element: {
    className: string
    tag: string
    id: string
    outerHTML: string
    outerText: string

    innerHTML: string
    innerText: string

    baseURI: string
  }
}

export const postMouseEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { experimentID, ...data } = req.body as PostMouseEventRequestBody

    const experiment = await ExperimentRepository.findOne({ where: { id: experimentID } })
    if (!experiment) {
      throw new CustomError('Experiment does not exist', 400)
    }

    const mEvt = MouseEventRepository.create({
      ...data,
      experiment: experiment,
    })
    await MouseEventRepository.save(mEvt)
    res.status(201).json({ msg: 'OK' })
  } catch (err) {
    next(err)
  }
}
