import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class VideoPlayerEvent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: 'buffering' | 'pause' | 'play'

  @Column()
  type: 'single' | 'continuous'

  @Column()
  timestamp: string

  @ManyToOne(() => Experiment, (experiment) => experiment.videoPlayerEvents)
  experiment: Experiment
}
