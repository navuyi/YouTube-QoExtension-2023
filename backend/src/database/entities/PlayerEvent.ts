import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class PlayerEvent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  timestamp: string

  @ManyToOne(() => Experiment, (experiment) => experiment.playerEvents, { nullable: false })
  experiment: Experiment
}
