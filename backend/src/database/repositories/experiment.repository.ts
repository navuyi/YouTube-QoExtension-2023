import { Experiment } from '../entities/Experiment'
import { AppDataSource } from '..'

export const ExperimentRepository = AppDataSource.getRepository(Experiment).extend({
  createAndSave: async (experiment: Experiment) => {
    const newExperiment = ExperimentRepository.create(experiment)
    return await ExperimentRepository.save(newExperiment)
  },
  findByID: async (id: number) => {
    return await ExperimentRepository.findOneBy({ id: id })
  },
  getNextId: async () => {
    const lastExperiment = await ExperimentRepository.findOne({
      order: {
        id: 'DESC',
      },
    })
    return lastExperiment ? lastExperiment.id + 1 : 1
  },
})