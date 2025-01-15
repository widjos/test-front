import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  contratoRoot:string = environment.urlService+'contrato/';
  constructor(private http:HttpClient) { }

  consumir(url:string):Observable<any>{
    return this.http.get(this.contratoRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  consumirPost(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.post<any>(this.contratoRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }

  consumirPatch(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.patch<any>(this.contratoRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }
  

  eliminar(url:string):Observable<any>{
    return this.http.delete(this.contratoRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  buscarContrato(){
    return this.consumir('');
  }

  guardarContrato(contrato:any){
    return this.consumirPost("create/", contrato);
  }

  eliminarContrato(idContrato:any){
    return this.eliminar(''+idContrato);
  }

}