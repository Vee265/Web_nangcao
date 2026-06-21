import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { STUDENT_NOTE } from './studentnote.entity';

@Entity()
export class STUDENT {
    @PrimaryColumn({ length: 10 })
    SID: string;

    @Column({ length: 30 })
    SNAME: string;

    @Column({ length: 30 })
    EMAIL: string;

    @Column({ length: 10, nullable: true })
    Tutor_id: string;

    // Thiết lập quan hệ 1-Nhiều với bảng trung gian StudentNote
    @OneToMany(() => STUDENT_NOTE, (studentNote) => studentNote.student)
    studentNotes: STUDENT_NOTE[];
}