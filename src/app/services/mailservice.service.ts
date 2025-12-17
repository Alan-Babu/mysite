import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  sendMail(formData: any): Observable<any> {
    console.log('Sending mail with data:', formData);
    return this.http.post(`${this.baseUrl}/contact`, formData);
  }

}
