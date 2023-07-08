import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MembersService} from '../../members.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  constructor(private member: MembersService) {}

  addMembers = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    email: new FormControl('')
  });
  message:boolean=false;

  ngOnInit() {}

  SaveData() {
    this.member.saveMembersData(this.addMembers.value).subscribe((result)=>{
      this.message=true;
      this.addMembers.reset({});
      // console.log(result);
    });
  }
  removeMessage(){
    this.message=false;
  }
}
