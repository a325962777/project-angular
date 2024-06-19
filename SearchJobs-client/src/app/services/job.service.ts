import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { FieldWork, Job } from "../Models/Job";
import { EnumTostringPipe } from "../Components/enumTostring/enum-tostring.pipe";

@Injectable({
    providedIn: 'root'
})
export class JobService {


    constructor(private http: HttpClient, private enumToStringPipe: EnumTostringPipe) { }

    getJobs(fieldWorkNum: string): Observable<Job[]> {
        return this.http
            .get<Job[]>(`https://localhost:7114/Job/GetJobs`)
            .pipe(
                map((listJobs: Job[]) =>
                (listJobs.filter(
                    (job) =>
                        (fieldWorkNum != undefined &&
                            job.fieldWork === JSON.parse(fieldWorkNum)) ||
                        fieldWorkNum === undefined))
                ))
    }
    
    filterJobs(filterData: any): Observable<Job[]> {
        console.log(`filterData: ${filterData.area} ${filterData.fieldJob}`);
        return this.http
            .get<Job[]>(`https://localhost:7114/Job/GetJobs`) // בקשת HTTP שמחזירה Observable של מערך משרות
            .pipe(
                map((jobs: Job[]) => // map עובד על המערך כולו
                    jobs.filter((job: Job) => { // filter עובד על כל משרה בנפרד
                        const areaMatches = filterData.area === 'All' || job.area === filterData.area;
                        const fieldWorkString = this.enumToStringPipe.transform(job.fieldWork);
                        const fieldJobMatches = filterData.fieldJob === 'ALL' || fieldWorkString === filterData.fieldJob;
                        console.log(`job: ${job.area} ${fieldWorkString}`);
                        console.log(`areaMatches: ${areaMatches} fieldJobMatches ${fieldJobMatches}`);
                        return areaMatches && fieldJobMatches; // החזרת true אם המשרה מתאימה לקריטריונים
                    })
                )
            );
    }



}


