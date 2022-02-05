import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-round5',
  templateUrl: './round5.component.html',
  styleUrls: ['./round5.component.css']
})
export class Round5Component implements OnInit {
  index = 0;
  par51;
  par52;
  par53;
  round = '5';
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



    var url = "https://anupam.ecell.in/addr5/";
    var body = new FormData();
    body.append('team', this.team)
    body.append('par51', this.par51)
    body.append('par52', this.par52)
    body.append('par53', this.par53)
    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        if (data == "success") {
          alert("Query Sent Successfully");
        }
        this.index += 1
        if (this.index >= 3) {
          console.log('1')
          this.router.navigate(['/bid'], { queryParams: { profile: 'bidding', name: 6 } })
        }
      }
    )
  }

}
