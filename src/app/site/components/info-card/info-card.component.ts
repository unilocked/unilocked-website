import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input('icon') icon:string
  @Input('title') title:string
  @Input('text') text:string

  constructor() { }

  ngOnInit(): void {
  }

}
