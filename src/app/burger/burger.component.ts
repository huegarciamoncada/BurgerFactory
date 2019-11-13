import { Component, OnInit, Input } from '@angular/core';
import {Burger} from '../models/burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  @Input() burgerChild: Burger;

  constructor() { }

  ngOnInit() {
  }

}
