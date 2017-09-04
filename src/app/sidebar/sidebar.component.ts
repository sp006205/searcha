import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  login(rulu, rala){
    alert(rulu + " " + rala + "로 로그인");
  }

  join(){
    alert("팝업은 만들 줄 모른다!");
  }

}
