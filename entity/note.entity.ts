import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { STUDENT_NOTE } from './studentnote.entity';

@Entity()
export class NOTE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column('text', { nullable: true })
    content: string;

    @Column({ type: 'timestamp', nullable: true })
    deadline: Date;

    // Thiết lập quan hệ 1-Nhiều với bảng trung gian StudentNote
    @OneToMany(() => STUDENT_NOTE, (studentNote) => studentNote.note)
    studentNotes: STUDENT_NOTE[];
}