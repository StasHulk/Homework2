import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() urlBg : string;
  @Input() colorBg : string;
  constructor() { 
    this.title = "My Title";
    this.description = "My Description";
    this.urlBg = "";
    this.colorBg = "#fff";
  }

  ngOnInit(): void {
  }

}
