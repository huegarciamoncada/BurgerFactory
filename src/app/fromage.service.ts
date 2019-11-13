import { Injectable } from '@angular/core';
import { Fromage } from './models/fromage';

@Injectable({
  providedIn: 'root'
})
export class FromageService {

  fromageTab : Array<Fromage>;

  constructor() { 
    const  fromage1 = new Fromage(1,'fromage Emmental');
    const  fromage2  = new Fromage(1,'fromage du bleu');
    const fromage3  = new Fromage(1,'fromage de la chevre');
      

    
    this.fromageTab = [fromage1,fromage2,fromage3];
  }
  getAll(): Array<Fromage> {
    return this.fromageTab;
  }

  getOne(id: number): Fromage {
    return this.fromageTab.filter(fromage => fromage.id === id)[0];
  }

  save(fromage: Fromage) {
    const fromageToSave = new Fromage(
      this.fromageTab.length + 1,
      fromage.nom
    );
    this.fromageTab.push(fromageToSave);
  }
  delete(id:number){
    this.fromageTab.splice(this.fromageTab.indexOf(this.getOne(id)),1);
  }
}
