import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round2',
  templateUrl: './round2.component.html',
  styleUrls: ['./round2.component.css']
})
export class Round2Component implements OnInit {

  par21;

  round = '2';
  team;

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



    var url = "https://anupam.ecell.in/addr2/";
    var body = new FormData();
    body.append('team', this.team)
    body.append('par21', this.par21)


    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/bid'], { queryParams: { profile: 'bidding', name: 3 } })
        if (data == "success") {
          alert("Query Sent Successfully");
        }
      }
    )
  }
}
