import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicesComponent } from './choices/choices.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-basic-calc',
  standalone: true,
  imports: [CommonModule, ChoicesComponent, OptionsComponent],
  templateUrl: './basic-calc.component.html',
  styleUrls: ['./basic-calc.component.css']
})
export class BasicCalcComponent {

  constructor() {
    const closeCalcBtn = document.querySelector('#close-calc_btn');
  }
  
  ngOnInit() {
    // declarando variaveis basicas e reutilizaveis
  }
  
  moveCalc(){
    const closeCalcBtn = document.querySelector('#close-calc_btn');
    console.log("cliclou")
  }

  stopMoveCalc(){
    console.log("mouseSaiu")
  }
}