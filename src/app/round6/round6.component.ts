import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round6',
  templateUrl: './round6.component.html',
  styleUrls: ['./round6.component.css']
})
export class Round6Component implements OnInit {
  round = '6';
  team;
  par61;

  cash;
  hostage;
  drills;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private modalService: NgbModal,) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('teamname'))
    this.team = localStorage.getItem('teamname')
    var url1 = "https://anupam.ecell.in/main/";
    var body = new FormData();
    body.append('round', this.round)
    body.append('team', this.team)

    this.http.post<any>(url1, body).subscribe(
      data => {
        console.log(data)
        this.cash = data.Money
        this.hostage = data.hostages
        this.drills = data.drillcount
        if (data == "success") {
          alert("Query Sent Successfully");
        }
      }
    )
  }
  contactSubmit() {
    var url1 = "https://anupam.ecell.in/main/";
    var body = new FormData();
    body.append('round', this.round)
    body.append('team', this.team)

    this.http.post<any>(url1, body).subscribe(
      data => {
        console.log(data)
        this.cash = data.Money
        this.hostage = data.hostages
        this.drills = data.drillcount
        if (data == "success") {
          alert("Query Sent Successfully");
        }
      }
    )

    var url = "https://anupam.ecell.in/addr6/";
    var body = new FormData();
    body.append('team', this.team)
    body.append('par61', this.par61)
    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        if (data == "success") {
          alert("Query Sent Successfully");
        }
        this.router.navigate(['/round7'])
      }
    )
  }
}
