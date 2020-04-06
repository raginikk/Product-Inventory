import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('Guest');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(name: string) {

    this.messageSource.next(name)
  }

  private role = new BehaviorSubject("");
  currentUserRole = this.role.asObservable();

  changeUserRole(role:string) {
    console.log(">>>>",role)
    this.role.next(role)
  }

}