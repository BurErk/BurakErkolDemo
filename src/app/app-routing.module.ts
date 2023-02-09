import { HomeComponent } from './Pages/home/home.component';
import { OurServiceComponent } from './Pages/our-service/our-service.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-service', component: OurServiceComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
