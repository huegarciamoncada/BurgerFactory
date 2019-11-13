import { Component, OnInit } from '@angular/core';
import {Pain} from '../models/pain';
import {Legume} from '../models/legume';
import {Viande} from '../models/viande';
import {Fromage} from '../models/fromage';
import {Burger} from '../models/burger';
import {BurgerService} from '../burger.service';


@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  burgerTab: Array<Burger>;
  constructor(private bs: BurgerService) { }

  ngOnInit() {
    this.burgerTab = this.bs.getAll();
  }

}
