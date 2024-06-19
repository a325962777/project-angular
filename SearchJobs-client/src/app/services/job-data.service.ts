import { Injectable } from "@angular/core";
import { FieldWork, Job } from "../Models/Job";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JobDataService {
    private _submitClicked = new BehaviorSubject<boolean>(false);
    submitClicked$ = this._submitClicked.asObservable();
  
    setSubmitClicked(value: boolean) {
      this._submitClicked.next(value);
    }
    jobData: Job = {
        fieldWork: FieldWork.ACCOUNTING,
        nameWork: '',
        scopeHours: 0,
        area: '',
        requirements: '',
        hybridWork: false
    }
    getJobData(): Job {
        return this.jobData;

    }
    setJobData(jobData: Job) {
        this.jobData = jobData;

    }


}