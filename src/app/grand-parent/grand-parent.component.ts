import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.css']
})
export class GrandParentComponent implements OnInit {
  @Input() Name:any;
  
  message: any;
  member=40;
  @Output() getResponse = new EventEmitter; 

  constructor() { }

  ngOnInit(): void {
  }
  getResponse1($event: any) {  
    this.message = $event;  
  } 
  // onClick() {  
  //   this.getResponse.emit('Message from parent');  
  // }  
  
}
