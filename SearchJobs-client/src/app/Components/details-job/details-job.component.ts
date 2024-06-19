import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { JobDataService } from '../../services/job-data.service';
import { FieldWork, Job } from '../../Models/Job';
import { User } from '../../Models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrl: './details-job.component.scss'
})
export class DetailsJobComponent implements OnInit {
  @Output()
  onOff: EventEmitter<number> = new EventEmitter<number>();
  constructor(private jobDataSrv: JobDataService, private userSrv: UserService,private router : Router) { }

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
  ngOnInit(): void {
    this.jobData = this.jobDataSrv.getJobData();
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
  HideJobDetails(){
    this.router.navigate(['']);
  }
}
