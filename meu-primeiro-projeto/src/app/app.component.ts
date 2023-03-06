import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

/*
  ngOnInit: é executado uma vez quando o componente é inicializado;
  ngOnChanges: executado também uma vez na criação do componente e toda vez que ele sofrer alguma mudança;
  ngOnDestroy: executado na destruição do componente.

  ngDoCheck: executado a cada mudança que o ngOnChange não detecta;
    ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;
    ngAfterContentChecked: quando o conteúdo externo é verificado;
    ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;
    ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara.
*/

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    {{valor}}
    <button (click)="adicionar()"> Adicionar </button>
    <br> <br>
    <button (click)="destroyComponent()"> Destruir Componente </button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor() { }

  public valor: number = 1;
  public adicionar(): number {
    return this.valor += 1;
  }

  public destruir: boolean = true;
  public destroyComponent() {
    this.destruir = false;
  }

  ngOnInit(): void { }
  ngDoCheck(): void { }
  ngAfterContentInit(): void { }
  ngAfterContentChecked(): void { }
  ngAfterViewInit(): void { }
  ngAfterViewChecked(): void { }

}
