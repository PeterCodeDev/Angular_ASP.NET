import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LandingPageDTO, PelicuaPostGet, PeliculaCreacionDTO, PeliculaDTO, PeliculaPutGet } from './peliculas';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http:HttpClient){}
  private apiURL = environment.apiURL + 'peliculas';

  public obtenerLandingPage():Observable<LandingPageDTO>{
    return this.http.get<LandingPageDTO>(this.apiURL);
  }

  public obtenerPorId(id : number): Observable<PeliculaDTO>{
    return this.http.get<PeliculaDTO>(`${this.apiURL}/${id}`);
  }

  public postGet():Observable<PelicuaPostGet>{
    return this.http.get<PelicuaPostGet>(`${this.apiURL}/postget`);
  }

  public putGet(id:number):Observable<PeliculaPutGet>{
    return this.http.get<PeliculaPutGet>(`${this.apiURL}/putget/${id}`)
  }

  public filtrar(valores: any): Observable<any> {
  let params = new HttpParams();

  // Solo agregamos el título si el usuario escribió algo
  if (valores.titulo) {
    params = params.append('titulo', valores.titulo);
  }

  // Solo agregamos el género si es diferente de 0 (el valor por defecto)
  if (valores.generoId && valores.generoId !== 0) {
    params = params.append('generoId', valores.generoId.toString());
  }

  // Solo enviamos los booleanos si son verdaderos
  if (valores.proximosEstrenos) {
    params = params.append('proximosEstrenos', valores.proximosEstrenos);
  }

  if (valores.enCines) {
    params = params.append('enCines', valores.enCines);
  }

  // La paginación siempre es obligatoria
  params = params.append('pagina', valores.pagina.toString());
  params = params.append('recordsPorPagina', valores.recordsPorPagina.toString());

  return this.http.get<PeliculaDTO[]>(`${this.apiURL}/filtrar`, {
    params, observe: 'response'
  });
}

  public crear(pelicula: PeliculaCreacionDTO):Observable<number>{
    const formData = this.ConstruirFormData(pelicula);
    return this.http.post<number>(this.apiURL, formData);
  }

  public borrar(id: number) {
  return this.http.delete(`${this.apiURL}/${id}`);
}

  public editar(id:number , pelicula: PeliculaCreacionDTO){
    const formData = this.ConstruirFormData(pelicula);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private ConstruirFormData(pelicula: PeliculaCreacionDTO): FormData {
  const formData = new FormData();

  formData.append('titulo', pelicula.titulo);
  formData.append('resumen', pelicula.resumen);
  formData.append('trailer', pelicula.trailer);
  formData.append('enCines', String(pelicula.enCines));
  
  if (pelicula.fechaLanzamiento) {
    const fecha = new Date(pelicula.fechaLanzamiento);
    // 👇 AÑADIMOS ESTA VALIDACIÓN 👇
    if (!isNaN(fecha.getTime())) { 
      formData.append('fechaLanzamiento', formatearFecha(fecha));
    }
  }

  if (pelicula.poster) {
    formData.append('poster', pelicula.poster);
  }

  formData.append('generosIds', JSON.stringify(pelicula.generosIds));
  formData.append('cinesIds', JSON.stringify(pelicula.cinesIds));
  formData.append('actores', JSON.stringify(pelicula.actores));

  return formData;
}
}
