import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeografiaService {

  geografiaRoot:string = environment.urlService+'geografia/';
  constructor(private http:HttpClient) { }

  consumir(url:string):Observable<any>{
    return this.http.get(this.geografiaRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  consumirPost(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.post<any>(this.geografiaRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }

  consumirPatch(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.patch<any>(this.geografiaRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }
  

  eliminar(url:string):Observable<any>{
    return this.http.delete(this.geografiaRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  buscarGeografia(){
    return this.consumir('');
  }

  guardarGeografia(geografia:any){
    return this.consumirPost("create/", geografia);
  }

  eliminarGeografia(idGeografia:any){
    return this.eliminar(''+idGeografia);
  }

}