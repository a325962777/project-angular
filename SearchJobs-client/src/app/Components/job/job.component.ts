import { Component, Input, OnInit } from '@angular/core';
import { FieldWork, Job } from '../../Models/Job';
import { Router } from '@angular/router';
import { JobDataService } from '../../services/job-data.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private router: Router, private jobDataSrv: JobDataService, private userSrv: UserService) { }
  
  @Input()
  jobData: Job = {
    fieldWork: FieldWork.ACCOUNTING,
    nameWork: '',
    scopeHours: 0,
    area: '',
    requirements: '',
    hybridWork: false
  }
  user: User = {
    userName: '',
    password: '',
    id: 0,
    fieldWorkSearch: FieldWork.ACCOUNTING,
    numCVSent: 0
  };
  displayDetailsJob(jobData: Job) {
    this.jobDataSrv.setJobData(jobData);
    this.router.navigate(['jobDetails'])
  }

  numCv: number = 0;
  sendCV() {
    //send cv
    alert("the CV was sent successfully 👍🏼👍🏼👍🏼")
    //update num cv
    const userString = localStorage.getItem('user');
    this.user = JSON.parse(userString!);
    this.user.numCVSent++;
    this.userSrv.updateCV(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.jobDataSrv.setSubmitClicked(true);

  }
}
