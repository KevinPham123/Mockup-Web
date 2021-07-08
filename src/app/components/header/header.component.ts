import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Header';
  constructor() { }

  ngOnInit(): void {
  }
  toggleLoginTask(){
    console.log('toggle');
  }
  toggleLoginTask2(){
    console.log('toggle');
  }
}
