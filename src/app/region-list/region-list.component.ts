import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from '../model/region';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  regions?:Region[];
  constructor( private regionService : RegionService ,
     private router:Router) { }

  ngOnInit(): void {
    this.getRegions();
  }
 
  private getRegions(){
    this.regionService.getRegionsList().subscribe(data=>{
      this.regions=data;
    });
  }

}
