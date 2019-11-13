import { Component, OnInit } from '@angular/core';
import { Burger } from '../models/burger';
import { Viande } from '../models/viande';
import { PainService } from '../pain.service';
import { ViandeService } from '../viande.service';
import { LegumeService } from '../legume.service';
import { FromageService } from '../fromage.service';
import { BurgerService } from '../burger.service';
import { Pain } from '../models/pain';
import { Fromage } from '../models/fromage';
import { Legume } from '../models/legume';

@Component({
  selector: 'app-add-burger',
  templateUrl: './add-burger.component.html',
  styleUrls: ['./add-burger.component.css']
})
export class AddBurgerComponent implements OnInit {

  name: string;
  pain: Pain;
  viande: Viande;
  fromage: Fromage;
  legume: Legume;

  constructor(public ps: PainService,
    public vs: ViandeService,
    public ls: LegumeService,
    public fs: FromageService,
    public bs: BurgerService) { }

  ngOnInit() {
  }
  save() {
    this.bs.save(new Burger(null, this.name, this.pain, this.viande,this.legume,this.fromage));
  }

}
