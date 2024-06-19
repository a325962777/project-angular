import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { ListJobsComponent } from './Components/list-jobs/list-jobs.component';
import { JobComponent } from './Components/job/job.component';
import { EnumTostringPipe } from './Components/enumTostring/enum-tostring.pipe';
import { DetailsJobComponent } from './Components/details-job/details-job.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './Components/login/login.component';
import { FilterComponent } from './Components/filter/filter.component';
import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ListJobsComponent,
    JobComponent,
    EnumTostringPipe,
    DetailsJobComponent,
    FilterComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    UserService,
    JobService,
    EnumTostringPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
