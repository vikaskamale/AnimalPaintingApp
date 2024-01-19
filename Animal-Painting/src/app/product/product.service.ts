import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl + "/products";
  
  constructor(private http: HttpClient) { }

  // getProducts(): Observable<product[]>{
  //   this.http.get<Product[]>(this.getProducts)
  // }
}
