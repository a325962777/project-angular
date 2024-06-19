import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  allTipeJob = [
    "ACCOUNTING", "SOFTWARE_DEVELOPMENT", "ARCHITECTURE", "EXTERIOR_DESIGN","SECRETARIAT", "GRAPHICS"
  ];
  allCities = [
    "Tel Aviv", "Jerusalem", "Modiin", "Ashdod", "Arad", "Beer Sheva", "Haifa", "Metula", "Herzliya", "Petah Tikva"
  ]
  filterData:any={fieldJob : "ALL", area : "All"}
  @Output()
  filterChanged:EventEmitter<any>= new EventEmitter<any>();

  
  submitFilter(){
    this.filterChanged.emit(this.filterData);
  }
}
