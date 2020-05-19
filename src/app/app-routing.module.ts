import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './pages/top/top.component';
import { SerieComponent } from './pages/serie/serie.component';


const routes: Routes = [
  {path:'top',component: TopComponent},
  {path:'serie',component:SerieComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
