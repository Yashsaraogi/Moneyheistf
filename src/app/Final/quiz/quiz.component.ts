import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
par11;
par12;
par13;
round='1';
team ;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,private modalService: NgbModal,) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('teamname'))
    this.team= localStorage.getItem('teamname')
  }
  contactSubmit(){
    console.log(this.par11,this.par13,this.team,
      this.par12)
      

    
    var url="https://anupam.ecell.in/addr1/";
    var body = new FormData();
    body.append('team', this.team)
    body.append('par11', this.par11)
    body.append('par12', this.par12)
    body.append('par13', this.par13)
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
