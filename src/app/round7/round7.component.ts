import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round7',
  templateUrl: './round7.component.html',
  styleUrls: ['./round7.component.css']
})
export class Round7Component implements OnInit {

  par71;
  
  round='7';
  team ;
    constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,private modalService: NgbModal,) { }
  
    ngOnInit(): void {
      console.log(localStorage.getItem('teamname'))
      this.team= localStorage.getItem('teamname')
    }
    contactSubmit(){
      
        
  
      
      var url="https://anupam.ecell.in/addr7/";
      var body = new FormData();
      body.append('team', this.team)
      body.append('par71', this.par71)
      
      this.http.post<any>(url,body).subscribe(
        data=>{
          console.log(data)
          if (data=="success"){
            alert("Query Sent Successfully");
          }
        }
      )
      var url1="https://anupam.ecell.in/main/";
      var body = new FormData();
      body.append('round', this.round)
      body.append('team', this.team)
      
      this.http.post<any>(url1,body).subscribe(
        data=>{
          console.log(data)
          if (data=="success"){
            alert("Query Sent Successfully");
          }
        }
      )

      }
      


}
