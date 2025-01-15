import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  colaboradorRoot:string = environment.urlService+'colaborador/';
  constructor(private http:HttpClient) { }

  consumir(url:string):Observable<any>{
    return this.http.get(this.colaboradorRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  consumirPost(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.post<any>(this.colaboradorRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }

  consumirPatch(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.patch<any>(this.colaboradorRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }
  

  eliminar(url:string):Observable<any>{
    return this.http.delete(this.colaboradorRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  buscarColaborador(){
    return this.consumir('');
  }

  guardarColaborador(colaborador:any){
    return this.consumirPost("create/", colaborador);
  }

  eliminarColaborador(idColaborador:any){
    return this.eliminar(''+idColaborador);
  }

}