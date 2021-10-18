import { MainService, Dados } from './../../main.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.scss']
})
export class DadosCadastraisComponent implements OnInit, AfterViewInit {

  constructor(private mainService: MainService,
              private router: Router) { }


  @ViewChild('item') item:any;
  dados: Dados = {
    conta_aplicacao:'',
    cpf_cli:'',
    id:0,
    nome:'',
    num_conta_aplicacao:'',
    num_conta_corrente:'',
    sit_cpf:''
  }

  ngOnInit(): void {

    this.mainService.dadosSubject.subscribe(item=>{
      if (item.cpf_cli !== ''){
        this.dados = item;
      }else {
        this.router.navigate(['']);
      }
    })
  }

  ngAfterViewInit(){

    if(location.pathname.search('info') > -1) {
      this.mainService.showButtonFooter = true;
    }
  }

}
