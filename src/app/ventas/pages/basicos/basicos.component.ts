import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {

  nombreLower: string = "juan luis";
  nombreUpper: string = "JUAN LUIS";
  nombreCompleto: string = "JuAn LuIs PaUlAnO ToRrEs";

  fecha: Date = new Date();

  
}
