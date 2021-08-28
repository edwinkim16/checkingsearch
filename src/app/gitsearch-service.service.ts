import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {
  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.username = "edwinkim16";
    this.repo = "";
  }
 
  // getUser(): any {
  //   return this.http.get("https://api.github.com/user/85213937")
  //   .pipe((res =>res));
  // }

  // getRepos(): any {
  //   return this.http.get("https://api.github.com/user/85213937")
  //   .pipe((res => res));
  // }

  getUser(username:any):Observable<any> {
    return this.http.get("https://api.github.com/users/" + username + "?access_token="+ environment.accessToken)
    .pipe((res =>res));
  }

  getRepos(username:any): Observable<any> {
    return this.http.get("https://api.github.com/users/" + username + "/repos?access_token=" + environment.accessToken)
    .pipe((res => res));
  }
 
}
