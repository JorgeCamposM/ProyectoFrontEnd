import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './pages/top/top.component';
import { SerieComponent } from './pages/serie/serie.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'top',component: TopComponent, canActivate:[AuthGuard]},
  {path:'serie',component:SerieComponent, canActivate:[AuthGuard]},
  {path:'inicio',component: InicioComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
