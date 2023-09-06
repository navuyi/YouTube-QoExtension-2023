import { KeyboardEvent } from '../entities/KeyboardEvent'
import { AppDataSource } from '..'

export const KeyboardEventRepository = AppDataSource.getRepository(KeyboardEvent)
