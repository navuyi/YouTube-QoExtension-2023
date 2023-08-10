import * as process from 'process'
import { DataSource } from 'typeorm'
import { Experiment } from './entities/Experiment'
import { DebugData } from './entities/DebugData'
import { MouseEvent } from './entities/MouseEvent'
import { VideoPlayerEvent } from './entities/VideoPlayerEvent'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  //host: "localhost",
  //port: 5432,
  //username: "test",
  //password: "test",
  database:
    process.env.NODE_ENV === 'test'
      ? './src/database/database.test.sqlite'
      : './src/database/database.sqlite',
  synchronize: true, // <-- DO NOT USE IN PRODUCTION
  logging: false,
  entities: [Experiment, DebugData, MouseEvent, VideoPlayerEvent], // <-- all entities have to be imported
  subscribers: [],
  migrations: [],
  dropSchema: true, // <-- DO NOT USE IN PRODUCTION
})
