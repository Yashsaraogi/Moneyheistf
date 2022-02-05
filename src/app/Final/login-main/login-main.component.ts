import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  team;
  mem1;
  mem2;
  mem3;
  mem4;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router,private modalService: NgbModal,) { }


  ngOnInit(): void {
    
  }

  contactSubmit(){
    console.log(this.mem1,
      this.mem2)
      

    
    var url="https://anupam.ecell.in/add/";
    var body = new FormData();
    body.append('team', this.team)
    body.append('member1', this.mem1)
    body.append('member2', this.mem2)
    body.append('member3', this.mem3)
    
    this.http.post<any>(url,body).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('teamname', this.team)
        if (data=="success"){
          alert("Query Sent Successfully");
        }
      }
    )
    }

}
