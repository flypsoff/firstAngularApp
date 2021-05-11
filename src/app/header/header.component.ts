import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() text = '';
  @Input() count = 0;

  @Output() adText = new EventEmitter<string>(); // transfer data from child to parent (string or undefined)

  handleClick(): void {
    this.adText.emit('From child to parent');
  }

  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }
}
