import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public topAnimes: any[];

  constructor(private baseService: BaseService) { 
    this.topAnimes = [];
  }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.baseService.getTopAnimes().subscribe({
      next: (res: any) => {
        console.log(res.top[0]);
        this.topAnimes = res.top;
      }
    });
  }

}
