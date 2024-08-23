import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  designation: string;

  @Column({
    default: 'Zafar Iqbal',
  })
  reportingManager: string;

  @Column()
  department: string;
}
