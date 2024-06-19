import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Job } from '../../Models/Job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrl: './list-jobs.component.scss'
})
export class ListJobsComponent implements OnInit {
  constructor(private JobSvc: JobService, private router: ActivatedRoute) { }

  listJobs: any = [];
  fieldWorkNum: string = '';

  ngOnInit(): void {
    this.router.params.subscribe(p => this.fieldWorkNum = p['fieldWorkNum'])

    this.JobSvc.getJobs(this.fieldWorkNum).subscribe(
      (res: Job[]) =>
      (this.listJobs = res)
        );

  }
  changeFilter(event:any){
     this.JobSvc.filterJobs(event).subscribe((res:Job[]) =>{
      this.listJobs=res;
      console.log(this.listJobs);
      
     }
      
     );
    
    
  }

}
