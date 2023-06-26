import { Pupils } from "./interface";

export class Pupil {
  private pupil: Pupils[];

  constructor(){
      this.pupil = [];
  }

    add(data:Pupils): string {
        const pupill: Pupils = {
          id: this.pupil.length.toString(),
          ...data,
        };
        this.pupil.push(pupill);
        return pupill.id;
      }
    
      read(pupilId: string): Pupils | undefined {
        return this.pupil.find((p) => p.id === pupilId);
      }
    
      update(pupilId: string, updatedProfile: Pupils): string {
        const pupilIndex = this.pupil.findIndex((p) => p.id === pupilId);
        if (pupilIndex !== -1) {
          this.pupil[pupilIndex] = { ...updatedProfile, id: pupilId };
        }
        return pupilId;
      }
    
      remove(pupilId: string): void {
        const index = this.pupil.findIndex((p) => p.id === pupilId);
        if (index !== -1) {
          this.pupil.splice(index, 1);
        }
      }
}

