import { PlayerEvent } from '../entities/PlayerEvent'
import { AppDataSource } from '..'

export const PlayerEventRepository = AppDataSource.getRepository(PlayerEvent)
