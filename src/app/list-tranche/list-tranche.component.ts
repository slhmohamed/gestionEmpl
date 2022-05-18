import { Component, OnInit } from '@angular/core';
import { TrancheService } from '../services/tranche.service';
import { Tranche } from '../model/tranche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tranche',
  templateUrl: './list-tranche.component.html',
  styleUrls: ['./list-tranche.component.css']
})
export class ListTrancheComponent implements OnInit {

  tranches?:Tranche[];
  constructor( private trancheService : TrancheService ,
     private router:Router) { }

  ngOnInit(): void {
    this.getTranches();
  }
 
  private getTranches(){
    this.trancheService.getTranchesList().subscribe(data=>{
      this.tranches=data;
    });
  }

}
