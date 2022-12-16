import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userId = 0;
  userName = '';
  userNumber = '';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
   // JSON.parse(localStorage.getItem('userId'));
    this.route.queryParams.subscribe( data => {
      this.userName = data.name;
      this.userNumber = data.mobile;
    });
    localStorage.setItem('userNumber', this.userNumber ? String(this.userNumber) : '');
    localStorage.setItem('userName', this.userName ? String(this.userName) : '');
  }

}
