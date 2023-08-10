import { Request, Response, NextFunction } from 'express'
import { Experiment, SubjectSex } from '../database/entities/Experiment'
import { ExperimentRepository } from '../database/repositories/experiment.repository'
import { DebugDataRepository } from '../database/repositories/debugData.repository'
import { DebugData } from '../database/entities/DebugData'

export interface PostDebugDatumRequestBody {
  videoID: string | null
  sCPN: string | null
  viewport: string | null
  droppedFrames: string | null
  totalFrames: string | null
  currentResolution: string | null
  optimalResolution: string | null
  volume: string | null
  normalizedVolume: string | null
  codecs: string | null
  color: string | null
  connectionSpeed: string | null
  networkActivity: string | null
  bufferHealth: string | null
  mysteryText: string | null
  date: string | null

  sessionID: string | null
  timestmap: string | null
}

export const postDebugDatum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as PostDebugDatumRequestBody
    const debugDatum = await DebugDataRepository.createAndSave(data as DebugData)

    res.status(201).json()
  } catch (err) {
    next(err)
  }
}
