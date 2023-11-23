import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicesComponent } from './choices/choices.component';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-basic-calc',
  standalone: true,
  imports: [CommonModule, ChoicesComponent, OptionsComponent],
  templateUrl: './basic-calc.component.html',
  styleUrl: './basic-calc.component.css'
})
export class BasicCalcComponent {

}
