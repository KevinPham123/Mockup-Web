import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {
  @Input() text: string ="";
  @Input() color: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
