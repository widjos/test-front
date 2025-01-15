import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresaRoot:string = environment.urlService+'empresa/';
  constructor(private http:HttpClient) { }

  consumir(url:string):Observable<any>{
    return this.http.get(this.empresaRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  consumirPost(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.post<any>(this.empresaRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }

  consumirPatch(url:string, parametro:any):Observable<any>{
    let htttOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
      )
    };

    return this.http.patch<any>(this.empresaRoot+url, parametro, htttOptions).pipe(
      catchError((e) => throwError('Hay error'))
    );
  }
  

  eliminar(url:string):Observable<any>{
    return this.http.delete(this.empresaRoot+url).pipe(
      catchError((e) => throwError("Hay un error"))
    );
  }

  buscarEmpresa(){
    return this.consumir('');
  }

  guardarEmpresa(empresa:any){
    return this.consumirPost("create/", empresa);
  }

  eliminarEmpresa(idEmpresa:any){
    return this.eliminar(''+idEmpresa);
  }

}
