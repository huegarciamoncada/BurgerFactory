import { Injectable } from '@angular/core';
import { Burger } from './models/burger';
import { PainService } from './pain.service';
import { ViandeService } from './viande.service';
import { LegumeService } from './legume.service';
import { FromageService } from './fromage.service';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  burgerTab: Array<Burger>;
  constructor(private ps: PainService,
              private vs: ViandeService,
              private ls: LegumeService,
              private fs: FromageService) { 

    const  dinde1 = this.vs.getOne(1);
    const dinde2 = this.vs.getOne(2);
    const boeuf = this.vs.getOne(3);
    const saumon = this.vs.getOne(4);
    const tofu = this.vs.getOne(5);

    const flute = this.ps.getOne(1);
    const baguette = this.ps.getOne(2);
    const pain1 =this.ps.getOne(3);
    const pain2 = this.ps.getOne(4);

    const  salad1 = this.ls.getOne(1);
    const  salad2 = this.ls.getOne(2);
    const tomate = this.ls.getOne(3);
    const olive = this.ls.getOne(4);
    const poivron = this.ls.getOne(5);

    const  fromage1 = this.fs.getOne(1);
    const  fromage2  = this.fs.getOne(1);
    const fromage3  = this.fs.getOne(1);

    const burger1 = new Burger(1,'LundiMidi',flute,dinde1,salad1,fromage1);
    const burger2 = new Burger(2,'MardiMidi',pain1,boeuf,tomate,fromage2);
    const burger3 = new Burger(3,'MardiSoir',baguette,saumon,olive,fromage3);
    const burger4 = new Burger(4,'JeudiSoir',pain1,dinde2,salad2,fromage1);
    //const burger5 = new Burger(5,'VendrediMidi',pain2,tofu,poivron,fromage2);
    const burger5 = new Burger(1,'vendrediMidi',flute,boeuf,salad1,fromage2);

    this.burgerTab = [burger1,burger2,burger3,burger4,burger5];
     }
     getAll(): Array<Burger> {
      return this.burgerTab;
    }
  
    getOne(id: number): Burger {
      return this.burgerTab.filter(burger => burger.id === id)[0];
    }
  
    save(burger: Burger) {
      const burgerToSave = new Burger(
        this.burgerTab.length + 1,
        burger.nom,burger.pain,burger.viande,burger.legume,burger.fromage
      );
      this.burgerTab.push(burgerToSave);
    }
    delete(id:number){
      this.burgerTab.splice(this.burgerTab.indexOf(this.getOne(id)),1);
    }
    }
