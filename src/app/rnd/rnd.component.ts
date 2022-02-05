import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent implements OnInit {
  id;
  bid: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.filter(params => params.profile).subscribe(params => {
      console.log(params);
      if (params.profile == 'bidding') {
        this.bid = true;
      }
      else {
        this.bid = false;
      }
      this.id = params.name;
    }
    );

    if (this.bid) {
      this.router.navigate(['/bid'], { queryParams: { profile: 'bidding', name: this.id } })
    }
    else {
      if (this.id == 1) {
        this.router.navigate(['/quiz']);
      }
      else if (this.id == 2) {
        this.router.navigate(['/round2']);
      }
      else if (this.id == 3) {
        this.router.navigate(['/round3']);
      }
      else if (this.id == 4) {
        this.router.navigate(['/round4']);
      }
      else if (this.id == 5) {
        this.router.navigate(['/round5']);
      }
      else if (this.id == 6) {
        this.router.navigate(['/round6']);
      }
      else if (this.id == 7) {
        this.router.navigate(['/round7']);
      }
    }



  }

}
