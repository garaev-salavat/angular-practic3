import { HostListener, Output } from '@angular/core';
import { Directive, EventEmitter } from '@angular/core';

// 1. Подписываемся на событие input
// 2. Получаем значение $event.target.value hostListener
// 3. Создаем событие myInput
// 4. Возвращаем value

@Directive({
  selector: '[myInputEvent]',
  exportAs: 'myInput'
})
export class Direct1Directive {

  constructor() { }

@Output()  
myInputEvent: EventEmitter<string> = new EventEmitter;
  
  @HostListener("input", ['$event.target.value'])
  myInputEventHandler(value: string ){
      console.log('Директива myInputEvent. Сработала директива myInputEvent ', value);
    this.myInputEvent.emit(value);
      }
}


