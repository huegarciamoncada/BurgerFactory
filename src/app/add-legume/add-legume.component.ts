import { Component, OnInit } from '@angular/core';
import { Legume } from '../models/legume';
import { LegumeService } from '../legume.service';

@Component({
  selector: 'app-add-legume',
  templateUrl: './add-legume.component.html',
  styleUrls: ['./add-legume.component.css']
})
export class AddLegumeComponent implements OnInit {
  legume : Legume;
  constructor(public ls:LegumeService) { }

  ngOnInit() {
    this.legume = new Legume(null, null,null);
  }
  save() {
    this.ls.save(this.legume);
  }

}
