import { MainService, Dados } from './../../main.service';
import { Component, Input, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent implements OnInit {

  @Input() cpf:string = '';
  @Input() disabledButton:boolean = false;
  constructor(private mainService: MainService,
    private router: Router,
    private toastr: ToastrService) { }

  dados: Dados = {
    conta_aplicacao:'',
    cpf_cli:'',
    id:0,
    nome:'',
    num_conta_aplicacao:'',
    num_conta_corrente:'',
    sit_cpf:''
  }

  public form: FormGroup = new FormGroup({
    cpf: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    $('#cpf').focus();
    this.mainService.showButtonFooter = false;
    this.disabledButton = false;
    if(this.cpf !== ''){
      this.form.patchValue({
        cpf: this.cpf,
      })
      this.disabledButton = true;

      this.form.get('cpf')?.disable();
    }
  }

  submitForm() {

    if (this.form.invalid) {
      this.toastr.error('CPF - Campo obrigatório');
      $('#cpf').focus();
    } else {

      this.mainService.get(this.form.get('cpf')?.value).subscribe(item => {

        if(item.length > 0){
          this.dados = item[0];
          this.mainService.dadosSubject.next(this.dados);
          this.router.navigate(['consultas/info/', this.dados.cpf_cli])
        }else {
          this.toastr.error('Cpf não encontrado');
        }

      }, err => {
        alert('erro ao consumir dados');
      })


    }
  }
}
