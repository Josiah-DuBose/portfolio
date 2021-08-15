import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appConfig = environment;

  constructor() { }

  get config(): any {
    return this.appConfig;
  }
}
