import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { STUDENT } from './student.entity';
import { NOTE } from './note.entity';

@Entity()
export class STUDENT_NOTE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'PENDING' }) // Trạng thái: PENDING, DONE, LATE...
    status: string;

    // Liên kết ngược về bảng STUDENT
    @ManyToOne(() => STUDENT, (student) => student.studentNotes, { onDelete: 'CASCADE' })
    student: STUDENT;

    // Liên kết ngược về bảng NOTE
    @ManyToOne(() => NOTE, (note) => note.studentNotes, { onDelete: 'CASCADE' })
    note: NOTE;
}