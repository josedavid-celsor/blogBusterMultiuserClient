import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPage, IUser } from '../model/generic';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(
  private oHttp: HttpClient
)
 {  }
 getUserPlist(page: number, size: number, termino: string,
  strSortField: string, strOrderDirection: string): Observable<IPage<IUser>> {
  let params = new HttpParams()
    .set("filter", termino)
    .set("page", page)
    .set("size", size);
  if (strSortField != "") { //&sort=codigo,[asc|desc]
    if (strOrderDirection != "") {
      params = params.set("sort", strSortField + "," + strOrderDirection);
    } else {
      params = params.set("sort", strSortField);
    }
  }
  return this.oHttp.get<IPage<IUser>>("http://localhost:8082/user", { params: params });
}

}
