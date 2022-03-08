import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input('current-date') currentDate!: Date;

  @Output() change = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendToParent(currentDate: Date): void {
    this.change.emit(currentDate);
  }
}
