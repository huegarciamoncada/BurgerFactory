import { Injectable } from '@angular/core';
import { Pain } from './models/pain';

@Injectable({
  providedIn: 'root'
})
export class PainService{
  painTab : Array<Pain>;

  constructor() { 
    const flute = new Pain(1, 'Flute','classique','simple','farine de seigle');
    const baguette = new Pain(2, 'Baguette','classique','simple','farine de blé');
    const pain1 = new Pain(3, 'Flute','céréale','complète','farine de lin');
    this.painTab = [flute, baguette,pain1];
  }
  getAll(): Array<Pain> {
    return this.painTab;
  }

  getOne(id: number): Pain {
    return this.painTab.filter(pain => pain.id === id)[0];
  }

  save(pain: Pain) {
    const painToSave = new Pain(
      this.painTab.length + 1,
      pain.nom,pain.typePain,pain.typeFarine,pain.farine
    );
    this.painTab.push(painToSave);
  }

  delete(id:number){
    this.painTab.splice(this.painTab.indexOf(this.getOne(id)),1);
  }
}
