import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericServicesService {

  baseUrl = 'http://192.168.0.10:5000'
  
  constructor(private httpClient: HttpClient,) { }

  postFile(data: File): Observable<any> {
    const endpoint = this.baseUrl + '/upload';
    if (data !== undefined) {
      let formData = new FormData();
      formData.append("image", data)
      return this.httpClient.post<any>(endpoint, formData);
    } else {
      return throwError("No file given");
    }
  }

}
