import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {MembersService} from '../../members.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{

  constructor(private member:MembersService, private router:ActivatedRoute) {
  }
  editMembers = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    email: new FormControl('')
  });
  message:boolean=false;

  ngOnInit() {
    // console.log(this.router.snapshot.params['id']);
    this.member.getMembersById(this.router.snapshot.params['id']).subscribe((result:any)=> {
      // console.log(result);
      this.editMembers = new FormGroup({
        name: new FormControl(result['name']),
        title: new FormControl(result['title']),
        email: new FormControl(result['email'])
      });
    });
  }

  UpdateData() {
    this.member.updateMembersData(this.router.snapshot.params['id'], this.editMembers.value).subscribe((result:any) => {
      console.log(result)
      this.message=true;
    })
  }
  removeMessage(){
    this.message=false;
  }
}
