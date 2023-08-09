import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { DebugData } from './DebugData'
import { MouseEvent } from './MouseEvent'
import { VideoPlayerEvent } from './VideoPlayerEvent'

export type SubjectSex = 'male' | 'female' | 'undisclosed'

@Entity()
export class Experiment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  subjectAge: number

  @Column()
  subjectSex: SubjectSex

  @Column()
  started: string

  @OneToMany(() => DebugData, (debugData) => debugData.experiment)
  debugData: DebugData[]

  @OneToMany(() => MouseEvent, (mouseEvent) => mouseEvent.experiment)
  mouseEvents: MouseEvent[]

  @OneToMany(() => VideoPlayerEvent, (videoPlayerEvent) => videoPlayerEvent.experiment)
  videoPlayerEvents: VideoPlayerEvent[]
}
