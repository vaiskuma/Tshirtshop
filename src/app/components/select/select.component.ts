import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Filter } from '../../core/filter';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})

export class SelectComponent implements OnInit {

  @Input() name: string;
  @Input() items: string[];
  @Output() selected = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit() {
  }

  // Emit an event to the parent and send the name and value(e.g {size: 'xs'})
  onSelect(value) {
    this.selected.emit({ name: this.name, value });
  }

}
