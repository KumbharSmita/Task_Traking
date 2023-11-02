import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
// import { ToDoListComponent } from './to-do-list/to-do-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UpdatepopupComponent,
    DashboardComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
