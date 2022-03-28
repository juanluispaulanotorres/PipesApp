import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  nombre: string = "Juan Luis";
  genero: string = "masculino";

  invitacionMapa = {
    'masculino': "invitarlo",
    'femenino': "invitarla"
  }

  clientes: string[] = ['María', 'Jesús', 'Sandra'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'hay 1 cliente esperando',
    'other': 'hay # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = "María";
    this.genero = "femenino";
  }

  borrarCliente() {
    if (this.clientes.length == 1)
      this.clientes = [];
    else
      this.clientes.splice(1, 1);
  }

  // KeyValue Pipe
  persona = {
    nombre: "Juan Luis",
    edad: 26,
    direccion: "Jaén, Andalucía"
  }

  // JsonPipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Aquaman",
      vuela: false
    },
    {
      nombre: "WonderWoman",
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = interval(1000);                                  // Genera 1000 números (aparecen en intervalos)

  valorPromesa = new Promise( (resolve) => {              // La promesa devuelve una respuesta y un error (opcional)
    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);
  });
}
