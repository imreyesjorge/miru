import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() animeCover: string;
  @Input() animeName: string;
  @Input() animeScore: string;

  constructor() { 
    this.animeCover = "";
    this.animeName = "Unknown";
    this.animeScore = "0";
  }

  ngOnInit(): void {
  }

}
