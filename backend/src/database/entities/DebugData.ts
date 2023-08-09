import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class DebugData {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  videoID: string

  @Column({ nullable: true })
  sCPN: string

  @Column({ nullable: true })
  viewport: string

  @Column({ nullable: true })
  droppedFrames: string

  @Column({ nullable: true })
  totalFrames: string

  @Column({ nullable: true })
  currentResolution: string

  @Column({ nullable: true })
  optimalResolution: string

  @Column({ nullable: true })
  volume: string

  @Column({ nullable: true })
  normalizedVolume: string

  @Column({ nullable: true })
  codecs: string

  @Column({ nullable: true })
  color: string

  @Column({ nullable: true })
  connectionSpeed: string

  @Column({ nullable: true })
  networkActivity: string

  @Column({ nullable: true })
  bufferHealth: string

  @Column({ nullable: true })
  mysteryText: string

  @Column({ nullable: true })
  date: string

  @Column({ nullable: true })
  timestmap: string

  @ManyToOne(() => Experiment, (experiment) => experiment.debugData)
  experiment: Experiment
}
