import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { JobComponent } from './Components/job/job.component';
import { ListJobsComponent } from './Components/list-jobs/list-jobs.component';
import { DetailsJobComponent } from './Components/details-job/details-job.component';

const routes: Routes = [
  {path:'',component:MainComponent, children :[
    {path:'',component:ListJobsComponent},
    {path:'jobDetails',component:DetailsJobComponent},
    {path:'allJobs/:fieldWorkNum',component:ListJobsComponent}
  ]

  },
  {path:'login',component:LoginComponent},
  // {path:'job',component:JobComponent},
  // {path:'allJobs/:fieldWorkNum',component:ListJobsComponent},
  // {path:'jobDetails',component:DetailsJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
