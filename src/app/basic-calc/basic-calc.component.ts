import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicesComponent } from './choices/choices.component';
import { OptionsComponent } from './options/options.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@Component({
  selector: 'app-basic-calc',
  standalone: true,
  imports: [CommonModule, ChoicesComponent, OptionsComponent, KeyboardComponent],
  templateUrl: './basic-calc.component.html',
  styleUrls: ['./basic-calc.component.css']
})
export class BasicCalcComponent {

  constructor() {
  }
  
  ngOnInit() {
    // declarando variaveis basicas e reutilizaveis
    const calcHeader = document.getElementById("calc-header") 
  }

  moveCalc(){
   
  }

  stopMoveCalc(){

  }
}
