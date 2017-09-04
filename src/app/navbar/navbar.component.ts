import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 

  }

  startSearch(rulu){
   alert(rulu + "로 검색을 해보자구~!!");    
  }

  ngOnInit() {
  }

}
