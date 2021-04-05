import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-backend',
  templateUrl: './header-backend.component.html',
  styleUrls: ['./header-backend.component.css']
})
export class HeaderBackendComponent implements OnInit {

  @Output("toggle") navToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle() {
    this.navToggle.emit();
  }

}
