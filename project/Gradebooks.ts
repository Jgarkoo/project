import { Gradebooks, Records, Pupils, Groups, Teachers} from "./interface";
import { Pupil } from "./Pupils";
import { LMS } from "./Lms";
import { teachers } from "./Teachers";
import { Group } from "./Groups";


export class Gradebook {
  generateUniqueId(): string {
    return '';
  }
    private gradebooks: Gradebooks[] = [];
    private group: Group;
    private teacher: teachers;
    private lms: LMS;
    private pupil: Pupil;

    constructor(group: Group, teacher: teachers, lms: LMS) {
        this.group = group;
        this.teacher = teacher;
        this.lms = lms;
      }

      add(groupId: string): string {
        const id = this.generateUniqueId();
        this.gradebooks.push({ id, records: [] });
        return id;
      }

      clear(): void {
        this.gradebooks = [];
      }
    
      addRecord(gradebookId: string, record: Records): void {
        const gradebook = this.gradebooks.find((g) => g.id === gradebookId);
        if (gradebook) {
          gradebook.records.push(record);
        }
      }

      read(gradebookId: string, pupilId: string): { name: string; records: Records[] } {
        const gradebook = this.gradebooks.find((g) => g.id === gradebookId);
        const pupil: Pupils | undefined = this.group.pupil.find((p) => p.id === pupilId);
        const teacher: teachers | undefined = this.teacher;
        const subjectId: string = gradebook?.records[0].subjectId || '';
      
        if (gradebook && pupil && teacher) {
          const name = `${pupil.name.firstName} ${pupil.name.lastName}`;
          const records: Records[] = gradebook.records.map((record) => ({
            pupilId: pupilId,
            teacherId: teacher.id,
            subjectId: subjectId,
            lesson: record.lesson,
            mark: record.mark,
          }));
      
          return { name, records };
        }
      
        return { name: '', records: [] };
      }
      
      readAll(gradebookId: string): { name: string; records: Records[] }[] {
        const gradebook = this.gradebooks.find((g) => g.id === gradebookId);
        const students: { name: string; records: Records[] }[] = [];
      
        if (gradebook) {
          for (const pupil of this.group.pupil) {
            const teacher: teachers | undefined = this.teacher;
            const subjectId: string = gradebook.records[0].subjectId || '';
      
            if (teacher) {
              const name = `${pupil.name.firstName} ${pupil.name.lastName}`;
              const records: Records[] = gradebook.records.map((record) => ({
                pupilId: pupil.id,
                teacherId: teacher.id,
                subjectId: subjectId,
                lesson: record.lesson,
                mark: record.mark,
              }));
      
              students.push({ name, records });
            }
          }
        }
      
        return students;
      }
      
}
