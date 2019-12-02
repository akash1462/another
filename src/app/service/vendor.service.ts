import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Vendor } from '../site/Vendor/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string = environment.baseUrl ;
  private subject = new Subject<Vendor[]>();


  constructor(private router: Router, private _httpClient: HttpClient, private _authService:AuthenticationService) { }
 
  getpending():Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<Vendor>(this.url+"vendors/pending",  { headers })
  }
 
  addVendor(vendor: Vendor): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.post<any>(this.url + "vendors", vendor, { headers })
    this.router.navigate(['login']);
  }

  getvendor(uname: string) {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<Vendor>(this.url+"vendors/"+uname,  { headers })
  }

  getvendors():Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    return this._httpClient.get<Vendor>(this.url+"vendors",  { headers })
  }

  editVendor(vendor: Vendor): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    console.log("Inside edit vendor service ")
    return this._httpClient.put<Vendor>(this.url + "vendors", vendor, { headers })
    window.alert("Vendor Details Modified Success")
  }
  
  getSubject(): Subject<Vendor[]> {
    return this.subject;
  }

}
