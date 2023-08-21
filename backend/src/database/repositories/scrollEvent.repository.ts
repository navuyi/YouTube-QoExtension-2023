import { ScrollEvent } from '../entities/ScrollEvent'
import { AppDataSource } from '..'

export const ScrollEventRepository = AppDataSource.getRepository(ScrollEvent)
