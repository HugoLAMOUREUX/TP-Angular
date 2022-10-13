import { Component, Input, OnInit } from '@angular/core';
import { Planche } from 'src/app/models/planche';

@Component({
  selector: 'app-planche',
  templateUrl: './planche.component.html',
  styleUrls: ['./planche.component.css'],
})
export class PlancheComponent implements OnInit {
  @Input() planche: Planche = new Planche();

  constructor() {}

  ngOnInit(): void {}
}
