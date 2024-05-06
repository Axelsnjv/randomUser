import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<any> = []

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void 
  {
    this.serviceService.getUserData().subscribe(
      (response) => {
        this.userList = response
        console.log(response);
      }
    )
  }

}
