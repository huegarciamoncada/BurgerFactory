import { Injectable } from '@angular/core';
import { Legume } from './models/legume';

@Injectable({
  providedIn: 'root'
})
export class LegumeService {

  legumeTab : Array<Legume>;

  constructor() { 
    const  salad1 = new Legume(1,'salad','frisée');
    const  salad2 = new Legume(2,'salad','laitue');
    const tomate = new Legume(3,'tomate','tomate');
    const olive = new Legume(4,'olive','olive');
    const poivron = new Legume(5,'poivron','poivron');   

    
    this.legumeTab = [salad1,salad2, tomate,olive,poivron];
  }
  getAll(): Array<Legume> {
    return this.legumeTab;
  }

  getOne(id: number): Legume {
    return this.legumeTab.filter(legume => legume.id === id)[0];
  }

  save(legume: Legume) {
    const legumeToSave = new Legume(
      this.legumeTab.length + 1,
      legume.nom,legume.typeLegume
    );
    this.legumeTab.push(legumeToSave);
  }
  delete(id:number){
    this.legumeTab.splice(this.legumeTab.indexOf(this.getOne(id)),1);
  }
}
