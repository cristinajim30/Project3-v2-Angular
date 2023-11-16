import { Component } from '@angular/core';


@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  userName: string = ''.toUpperCase();
  fontList: string[] = ['Poppins','Roboto Mono', 'Dancing Script', 'Josefin Sans'];
  aligmentList: string[] = ['Left','Center', 'Right'];
 

  optionSelected: string = this.fontList[0]; 
  fontSelected: string = this.fontList[0];
  numberSize: any = 60; //size by default
  inputSize: string = ''; // Recovering the input value
  cbAligment: string = this.aligmentList[1]; //check this radio by default
  aligmentSelected: string = this.aligmentList[1]; //aligment by default


  selectStyle(): void {
    this.fontSelected = this.optionSelected;
    console.log("fontSelected: ", this.fontSelected);

  }


  checkNumber(event: KeyboardEvent): any {

    // Allow backward key
    if (event.key === 'Backspace') {
      return;
    }
    // Recovering the current input value
    const inputValue = (event.target as HTMLInputElement).value;

    // Check if value is a number from 0 to 300
    const isValidNumber = /^\d+$/.test(inputValue) && +inputValue >= 0 && +inputValue <= 300;

    if (!isValidNumber) {
      alert('Ingrese un número válido del 0 al 300');
      this.inputSize = '';

    } else{ //if number is valid
      console.log("es numero valido");
      this.changeSize(); //call function to change size
    }

  }

  
  changeSize(): void {
    this.numberSize = this.inputSize;
  }

  selectAligment(): void {
    this.aligmentSelected = this.cbAligment;
  }
}
