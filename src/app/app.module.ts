
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';

import { PostPlistAdminComponent } from './component/post/PostPlistAdmin/PostPlistAdmin.component';
import { SearchUnroutedComponent } from './component/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './component/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PostPlistAdminComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [   
    PaginationService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
