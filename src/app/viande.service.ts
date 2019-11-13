import { Injectable } from '@angular/core';
import { Viande } from './models/viande';

@Injectable({
  providedIn: 'root'
})
export class ViandeService {

  viandeTab : Array<Viande>;

  constructor() { 
    const  dinde1 = new Viande(1,'escalope de dinde','panée');
    const dinde2 = new Viande(2,'escalope de dine','non panée');
    const boeuf = new Viande(3,'steak de boeuf','non panée');
    const saumon = new Viande(4,'Filet de Saumon','non panée');
    const tofu = new Viande(5,'tranche de tofu','non panée');

    
    this.viandeTab = [dinde1, dinde2,boeuf,saumon,tofu];
  }
  getAll(): Array<Viande> {
    return this.viandeTab;
  }

  getOne(id: number): Viande {
    return this.viandeTab.filter(viande => viande.id === id)[0];
  }

  save(viande: Viande) {
    const viandeToSave = new Viande(
      this.viandeTab.length + 1,
      viande.nom,viande.typeViande
    );
    this.viandeTab.push(viandeToSave);
  }
  delete(id:number){
    this.viandeTab.splice(this.viandeTab.indexOf(this.getOne(id)),1);
  }

}
