import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url='http://localhost:3000/tech_team';

  constructor(private http:HttpClient) { }
  getAllMembers(){
    return this.http.get(this.url);
  }
  saveMembersData(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }
  deleteMember( id:any ){
    return this.http.delete(`${this.url}/${id}`);
  }
  getMembersById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateMembersData(id:any, data:any){
    return this.http.put(`${this.url}/${id}`, data);
  }
}
