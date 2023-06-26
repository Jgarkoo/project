import { ISubject } from "./interface";

export class LMS { 
    
    private subjects: ISubject[] = [];

    add(subject: ISubject): void {
        this.subjects.push(subject);
      }
    
      remove(subject: ISubject): void {
        const index = this.subjects.findIndex((s) => s.id === subject.id);
        if (index !== -1) {
          this.subjects.splice(index, 1);
        }
      }
    
      verify(subject: ISubject): boolean {
        return this.subjects.some((s) => s.id === subject.id);
      }
    
      readAll(): ISubject[] {
        return this.subjects.map(({ id, title, lesson }) => ({ id, title, lesson }));
      }
}

