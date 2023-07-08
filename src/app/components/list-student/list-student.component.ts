import {Component, OnInit} from '@angular/core';
import { MembersService } from '../../members.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{
  constructor(private member:MembersService) {
  }
  membersData:any=[];
  ngOnInit() {
    this.member.getAllMembers().subscribe((data) => {
      // console.log(data);
      this.membersData=data;
    });

  }
  deleteMember(member_id:any){
    this.member.deleteMember(member_id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    });
  }

}
