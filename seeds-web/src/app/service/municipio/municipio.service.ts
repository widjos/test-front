import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  municipioRoot:string = environment.urlService+'municipio/';
  constructor(private http:HttpClient) { }

  consumir(url:string):Observable<any>{
    return this.http.get(this.municipioRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  consumirPost(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.post<any>(this.municipioRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }

  consumirPatch(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.patch<any>(this.municipioRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }
  

  eliminar(url:string):Observable<any>{
    return this.http.delete(this.municipioRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  buscarMunicipios(){
    return this.consumir('');
  }

  guardarMunicipios(municipio:any){
    return this.consumirPost("create/", municipio);
  }

  eliminarMunicipios(idMunicipio:any){
    return this.eliminar(''+idMunicipio);
  }

}