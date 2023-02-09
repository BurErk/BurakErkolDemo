import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurServiceComponent } from './Pages/our-service/our-service.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    OurServiceComponent,
    AboutUsComponent,
    SlideshowComponent,
    LoginDialogComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
