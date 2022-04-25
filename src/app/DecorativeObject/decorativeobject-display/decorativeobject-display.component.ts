import { Component, OnInit } from '@angular/core';
import { Decorativeobject } from 'src/app/model/decorativeobject';
@Component({
  selector: 'app-decorativeobject-display',
  templateUrl: './decorativeobject-display.component.html',
  styleUrls: ['./decorativeobject-display.component.css']
})
export class DecorativeobjectDisplayComponent implements OnInit {

  decorativeObject: Decorativeobject = new Decorativeobject("Frame ",1);
  constructor() { }

  ngOnInit(): void {
  }

}
