import { GYMS } from './GymList';
import { Injectable } from '@angular/core';
import {Gym} from './gym';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor() { }

  getGyms(): Observable<Gym[]> {
   return of(GYMS);
 }

 getGym(id: number): Observable<Gym> {
  return of(GYMS.find(gym => gym.id === id));
 }

}
