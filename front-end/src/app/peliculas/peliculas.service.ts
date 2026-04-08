import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PelicuaPostGet } from './peliculas';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http:HttpClient){}
  private apiURL = environment.apiURL + 'peliculas';

  public postGet():Observable<PelicuaPostGet>{
    return this.http.get<PelicuaPostGet>(`${this.apiURL}/postget`);
  }
}
