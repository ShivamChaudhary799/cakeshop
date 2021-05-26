import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DeactivateService implements CanDeactivate<CanComponentDeactivate>{

  // Deactivate function
  
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate();
  }
  constructor() { }
}
