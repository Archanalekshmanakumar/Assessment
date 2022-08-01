import { Component ,Input, Output, EventEmitter} from '@angular/core';  
  
@Component({  
  selector: 'app-parent',  
  templateUrl: './parent.component.html',  
  styleUrls: ['./parent.component.css']  
})  
export class ParentComponent {  
  @Output() getResponse1 = new EventEmitter; 
 
  message: any;  
  sendToChild!: string;  
  @Input() Name:any; 
  
  getResponse($event: any) {  
    this.message = $event;  
  }  
  member=10;
  onClick() {  
    this.getResponse1.emit('Message from child');  
  } 
  // submit() {  
  //   this.sendToChild = this.name;  
  // } 
}