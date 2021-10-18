import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showButton: boolean = false;
  constructor(private activatedRouter: ActivatedRoute,
              public mainService: MainService) { }

  ngOnInit(): void {

    this.mainService.showButtonFooter = this.activatedRouter.snapshot.paramMap.get('cpf') !== null;
    console.log();
  }

}
