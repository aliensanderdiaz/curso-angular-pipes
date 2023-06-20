import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n select
  public name: string = 'Fernando'
  public gender: 'male'|'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  // i18n plural

  public clients = ['Maria', 'Pedro', 'Jose']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.pop()
  }

  // json - keyvalue

  public client = {
    nombre: 'Juan',
    apellido: 'Pelaez',
    edad: 15
  }

  // async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  )

  public promiseValue: Promise<boolean> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promesa')
      resolve(true)
    }, 3500);
  })
}
