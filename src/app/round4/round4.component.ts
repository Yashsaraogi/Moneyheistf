import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round4',
  templateUrl: './round4.component.html',
  styleUrls: ['./round4.component.css']
})
export class Round4Component implements OnInit {

  par41;
  
  round='4';
  team ;
    constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,private modalService: NgbModal,) { }
  
    ngOnInit(): void {
      console.log(localStorage.getItem('teamname'))
      this.team= localStorage.getItem('teamname')
    }
    contactSubmit(){
      var url1="https://anupam.ecell.in/main/";
      var body = new FormData();
      body.append('round', this.round)
      
      
      this.http.post<any>(url1,body).subscribe(
        data=>{
          console.log(data)
          if (data=="success"){
            alert("Query Sent Successfully");
          }
        }
      )
        
  
      
      var url="https://anupam.ecell.in/addr4/";
      var body = new FormData();
      body.append('team', this.team)
      body.append('par41', this.par41)
      
      
      this.http.post<any>(url,body).subscribe(
        data=>{
          console.log(data)
          if (data=="success"){
            alert("Query Sent Successfully");
          }
        }
      )
      }

}