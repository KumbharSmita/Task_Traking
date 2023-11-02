import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent}
  // { path: 'dashboards', component: DashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
