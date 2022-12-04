import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPage, IUser } from 'src/app/model/generic';
import { UserService } from 'src/app/service/User.service';

@Component({
  selector: 'app-UserPlistAdmin',
  templateUrl: './UserPlistAdmin.component.html',
  styleUrls: ['./UserPlistAdmin.component.css']
})
export class UserPlistAdminComponent implements OnInit {

  responseFromServer: IPage<IUser>;

  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";


  constructor(
    private oUserService: UserService
  ) { 
    this.getPage();
  }

  ngOnInit() {
  }

  getPage(){
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<IUser>) => {
        this.responseFromServer = resp;
        if(this.page > resp.totalPages -1){
          this.page = resp.totalPages -1;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
