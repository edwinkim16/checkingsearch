import { Component, OnInit } from '@angular/core';
import { GitsearchServiceService } from '../gitsearch-service.service';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user!: any;
  repos!: any[];
  username!: string;

  constructor(private gitsearchService: GitsearchServiceService,
    private http:HttpClient) {
    // this.gitsearchService.getUser().subscribe((user: any[]) => {
    //   console.log(user);
    //   this.user = user;
    // });
    // this.gitsearchService.getRepos().subscribe((repos: any[]) => {
    //   console.log(repos);
    //   this.repos = repos;
    // });
  }
  findUser() {
    // this.gitsearchService.updateUser(this.username);
    this.gitsearchService.getUser(this.username).subscribe((data) => {
  
    
      // console.table(data)
         return this.user=data;
        
      },(error: any) =>{
        console.log(error);
        }
    )
  }

  findRepo() {
    // this.gitsearchService.updateUser(this.username);
    this.gitsearchService.getRepos(this.username).subscribe((data) => {
  
     this.repos=data
      // console.log(this.repos)
        return this.repos=data;
        
      },(error: any) =>{
        console.log(error);
        }
    )
  }
    

    

    // this.gitsearchService.getRepos().subscribe((repos: any[]) => {
      
    //   this.repos = repos;
    // });
  

  ngOnInit() {
  //   interface ApiResponse{
  //     resolve: any;
  //     username:string;
  //     repo:string;
  //   }
  //   let promise = new Promise<void>((resolve,reject)=>{
  //     this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
  //       this.username = response.username
  //       this.repos = response.

  //       resolve()
  //     },
  //     error=>{
  //       this.username = "Never, never, never give up"
       
  //       reject(error)
  //     })
  //   })
  //   return promise
  // }
    
  }
  
}

