import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  amount;
  round;
  active: boolean = false;
  show: boolean = false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.route.queryParams.filter(params => params.profile).subscribe(params => {
      console.log(params);
      this.round = params.name;
    }
    );

    this.http.get<any>('https://anupam.ecell.in/bidactive/').subscribe(
      response => {
        console.log(response);
        this.active = response.active
        if (!this.active) {
          this.show = true
        }
      }
    )
  }

  submit() {
    this.http.get<any>('https://anupam.ecell.in/round/').subscribe(
      response => {
        console.log(response['bid'])
        if (response['bid'].active) {
          console.log('move to next round')
          console.log(this.amount, this.round)
          var url = 'https://anupam.ecell.in/bid/'
          var body = new FormData();
          body.append('team', localStorage.getItem('teamname'))
          body.append('amount', this.amount)
          body.append('round', this.round)
          this.http.post<any>(url, body).subscribe(
            data => {
              console.log(data);
              alert('Your Bid amount ' + this.amount + ' has been placed successfully')
              this.show = true
            },
            error => {
              console.log(error);
              this.show = false
            }
          )
        }
        else {
          alert('Bidding Closed')
          window.location.reload()
        }

      }
    )


  }

  nextlevel() {
    this.http.get<any>('https://anupam.ecell.in/round/').subscribe(
      response => {
        console.log(response['round'])
        if (response['round'].active) {
          console.log('move to next round')
          if (this.round == 1) {
            console.log('quiz')
            window.location.href = 'quiz'
          }
          else if (this.round == 2) {
            console.log('round2')
            window.location.href = 'round2'
          }
          else if (this.round == 3) {
            console.log('round3')
            window.location.href = 'round3'
          }
          else if (this.round == 4) {
            console.log('round4')
            window.location.href = 'round4'
          }
          else if (this.round == 5) {
            console.log('round5')
            window.location.href = 'round5'
          }
          else if (this.round == 6) {
            console.log('round6')
            window.location.href = 'round6'
          }
          else if (this.round == 7) {
            console.log('round7')
            window.location.href = 'round7'
          }
          // window.location.href = '/']
        }
        else {
          alert('We are allocating drills, Kindly wait !!')
        }

      }
    )
  }
}
