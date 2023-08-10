import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Experiment } from './Experiment'

@Entity()
export class MouseEvent {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  pageX: number

  @Column()
  pageY: number

  @Column()
  screenX: number

  @Column()
  screenY: number

  @Column()
  offsetX: number

  @Column()
  offsetY: number

  @Column()
  clientX: number

  @Column()
  clientY: number

  @Column()
  scrollX: number

  @Column()
  scrollY: number

  @Column()
  type: string

  @Column()
  url: string

  @Column()
  elementClassName: string

  @Column()
  elementTag: string

  @Column()
  elementId: string

  @Column()
  elementOuterHTML: string

  @Column()
  elementOuterText: string

  @Column()
  elementInnerHTML: string

  @Column()
  elementInnerText: string

  @Column()
  elementBaseURI: string

  @Column()
  timestamp: string

  @ManyToOne(() => Experiment, (experiment) => experiment.mouseEvents, { nullable: true }) // ! LATER ! Set nullable to FALSE later
  experiment: Experiment
}
