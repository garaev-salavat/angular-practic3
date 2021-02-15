import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myInputHandler(value:string){
    console.log ('Подписка на событие. Сработала подписка на событие input', value);
  }

  qweConsole(value) {
    console.log ('app mod1', value);
  }

}
