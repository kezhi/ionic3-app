import { Component } from '@angular/core';

/**
 * Generated class for the IonSlideContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-slide-content',
  templateUrl: 'ion-slide-content.html'
})
export class IonSlideContentComponent {

  text: string;

  constructor() {
    console.log('Hello IonSlideContentComponent Component');
    this.text = 'Hello World';
  }

}
