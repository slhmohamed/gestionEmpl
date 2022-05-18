import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accident } from '../model/accident';
import { Temoin } from '../model/temoin';
import { TemoinService } from '../services/temoin.service';

@Component({
  selector: 'app-temoin',
  templateUrl: './temoin.component.html',
  styleUrls: ['./temoin.component.css']
})
export class TemoinComponent implements OnInit {
temoins?:Temoin[];


 
  constructor( private temoinService : TemoinService ,
     private router:Router) { }

  ngOnInit(): void {
    this.getTemoins();
  }
 
  private getTemoins(){
    this.temoinService.getTemoinssList().subscribe(data=>{
      this.temoins=data;
    });
  }

}
