import { Collection, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class ScrollEvent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  scrollX: number

  @Column()
  scrollY: number

  @Column()
  url: string

  @Column()
  timestamp: string

  @ManyToOne(() => Experiment, (experiment) => experiment.scrollEvents)
  experiment: Experiment
}
