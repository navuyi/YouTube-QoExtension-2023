import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class KeyboardEvent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: string

  @Column()
  altKey: boolean

  @Column()
  shiftKey: boolean

  @Column()
  ctrlKey: boolean

  @Column()
  key: string

  @Column()
  repeat: boolean

  @Column()
  timestamp: string

  @ManyToOne(() => Experiment, (experiment) => experiment.keyboardEvents, { nullable: false })
  experiment: Experiment
}
