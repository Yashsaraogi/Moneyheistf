import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round6',
  templateUrl: './round6.component.html',
  styleUrls: ['./round6.component.css']
})
export class Round6Component implements OnInit {
  round = '7' ;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,private modalService: NgbModal,) { }

  ngOnInit(): void {
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
  }
}
