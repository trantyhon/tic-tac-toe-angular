import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  arrHistory = [];
  comment:string;
  indexHistory : number = 0;

  constructor() { }

}
