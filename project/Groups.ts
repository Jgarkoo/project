import { Groups, Pupils} from "./interface";


export class Group {
    room: number;
    pupil: Pupils[];
    static counter = 1;
    id: number = Group.counter;
    generateUniqueId: any;
    constructor(data:Groups) {
        this.room = data.room;
        Group.counter++;
    }
    get Id(): number {
        return this.id;
    }
    
    private group: Groups[] = [];
    
    add(room: number): string {
        const groupId = this.generateUniqueId();
        const group: Groups = {
          id: groupId,
          room,
          pupil: [],
        };
        this.group.push(group);
        return groupId;
      }

      addPupil(groupId: number, pupils: Pupils): void {
        const group = this.group.find((g) => g.id === groupId);
        if (group) {
          group.pupil.push(pupils);
        }
      }

      removePupil(groupId: number, pupilId: string): void {
        const group = this.group.find((g) => g.id === groupId);
        if (group) {
          group.pupil = group.pupil.filter((pupil) => pupil.id !== pupilId);
        }
      }

      update(groupId: number, updatedGroup: Partial<Group>): void {
        const index = this.group.findIndex((group) => group.id === groupId);
        if (index !== -1) {
          this.group[index] = { ...this.group[index], ...updatedGroup };
        }
      }
    
      readAll(): Groups[] {
        return this.group;
      }
}

