import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { DebugData } from './DebugData'
import { MouseEvent } from './MouseEvent'
import { PlayerEvent } from './PlayerEvent'
import { ScrollEvent } from './ScrollEvent'
import { Assessment } from './Assessment'
import { KeyboardEvent } from './KeyboardEvent'

export type SubjectSex = 'male' | 'female' | 'undisclosed'

/**
 * Experiment entity (table) contains information on experiment subjects.
 * Other experiment data are linked to this entity via foreign key.
 * Experiment is assigned to each subject.
 */
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

  @Column({ nullable: true })
  ended: string

  @OneToMany(() => DebugData, (debugData) => debugData.experiment)
  debugData: DebugData[]

  @OneToMany(() => MouseEvent, (mouseEvent) => mouseEvent.experiment)
  mouseEvents: MouseEvent[]

  @OneToMany(() => PlayerEvent, (playerEvent) => playerEvent.experiment)
  playerEvents: PlayerEvent[]

  @OneToMany(() => ScrollEvent, (scrollEvent) => scrollEvent.experiment)
  scrollEvents: ScrollEvent[]

  @OneToMany(() => Assessment, (assessment) => assessment.experiment)
  assessments: Assessment[]

  @OneToMany(() => KeyboardEvent, (keyboardEvent) => keyboardEvent.experiment)
  keyboardEvents: KeyboardEvent[]
}
