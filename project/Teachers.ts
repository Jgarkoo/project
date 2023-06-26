import { Teachers } from "./interface";

export class teachers {
  private Teacher: Teachers[];
  name: any;
  id: string;
  constructor() {
    this.Teacher = []
  }

    add(data: Teachers): string {
      const teacher: Teachers = {
        id: this.Teacher.length.toString(),
        ...data,
      };
    this.Teacher.push(teacher);
    return teacher.id;
  }

  read(teacherId: string): Teachers | undefined {
    return this.Teacher.find((t) => t.id === teacherId);
  }

  update(teacherId: string, updatedProfile: Teachers): string {
    const teacherIndex = this.Teacher.findIndex((t) => t.id === teacherId);
    if (teacherIndex !== -1) {
      this.Teacher[teacherIndex] = { ...updatedProfile, id: teacherId };
    }
    return teacherId;
  }

  remove(teacherId: string): void {
    const index = this.Teacher.findIndex((t) => t.id === teacherId);
    if (index !== -1) {
      this.Teacher.splice(index, 1);
    }
  }
}