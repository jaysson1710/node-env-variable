import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public OS1 = '';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {
  }
}
