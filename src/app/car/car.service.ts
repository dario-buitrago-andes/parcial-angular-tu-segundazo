import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  private apiUrlExhibitions: string = "https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json";

  constructor(private http: HttpClient) { }

  getCars(idMuseum: number) : Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrlExhibitions);
  }
}
