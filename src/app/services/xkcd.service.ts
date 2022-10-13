import { Injectable } from '@angular/core';
import { async, map, Observable, of } from 'rxjs';
import { Planche } from '../models/planche';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class XkcdService {
  private url: string = '/api/';
  planches: Map<number, Planche> = new Map<number, Planche>();
  constructor(private http: HttpClient) {}

  getPlancheNumero(num: number): Observable<Planche> {
    if (this.planches.has(num)) {
      console.log(this.planches);
      return of(this.planches.get(num)!!) as Observable<Planche>;
    } else {
      const temp = this.http
        .get(this.url + num.toString() + '/info.0.json')
        .pipe(
          map(
            (planche: any) =>
              new Planche(
                planche.num,
                planche.img,
                new Date(planche.year, planche.month, planche.day),
                planche.title
              )
          )
        );
      temp.subscribe((planche: Planche) => {
        this.planches.set(num, planche);
      });
      console.log(this.planches);
      return temp;
    }
  }
}
