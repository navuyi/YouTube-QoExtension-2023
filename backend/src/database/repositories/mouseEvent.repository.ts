import { MouseEvent } from '../entities/MouseEvent'
import { AppDataSource } from '..'

export const MouseEventRepository = AppDataSource.getRepository(MouseEvent).extend({
  createAndSave: async (experiment: MouseEvent) => {
    const newMouseEvent = MouseEventRepository.create(experiment)
    return await MouseEventRepository.save(newMouseEvent)
  },
})
