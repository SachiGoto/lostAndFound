import { trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
// import { Renderer2 } from '@angular/core';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() claim_name:string = "test name"
  @Input() date_f:string | Date = "idk"
  @Input() desc:string  = "a thing"
  @Input() email:string = "never@gonna.you.up"
  @Input() found:boolean = false
  @Input() Iquestion:string = "who is in this picture"
  @Input() image:string = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1"
  @Input() Location:string = "a location"
  @Input() phone:string | number = "0006942000"
  @Input() title:string = "a thing"
  open:boolean = false
  ngOnInit(): void {
  }
  isfound(found:Boolean)
  {
    if(found)return"FOUND";
    else return"LOST";
  }


  // @HostListener("document:click")
  // clickedOut() {
  //   console.log("trigger")
  //   this.open = false
  //   // this should detect if the user clicks out
  // }
  // TODO make this expand upon clicking

}
