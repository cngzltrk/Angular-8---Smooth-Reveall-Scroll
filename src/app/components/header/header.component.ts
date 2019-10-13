import { Component, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(){}

  ngOnInit() {
    
}

scrollToElement($element): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}
