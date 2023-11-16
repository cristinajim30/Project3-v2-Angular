import { Component } from '@angular/core';
import { Operations } from '../../models/operations.model';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  number1: number = 0;
  inputN1: any = ''; //display by default in input1
  number2: number = 0;
  inputN2: any = ''; //display by default in input1
  result: number = 0;
  inicialResult: any = '';
  titleH2: string = '';
  operationList: string[] =['add', 'subtract', 'multiply', 'divide'];
  tableColumns: string[] = ['Time', 'Operation Request', 'Result', 'Remove'];
  selectedOperation: string = this.operationList[0]; // add operation by default
  idOperation: number;
  isVisibleTable:boolean;

  constructor(public calculatorService: CalculatorService) {
    this.idOperation = 1;
    this.isVisibleTable = false;
  }

  calculate(): void {
    this.number1 = this.inputN1;
    this.number2 = this.inputN2;

    switch (this.selectedOperation) {
      case this.operationList[0]:
        //add
        console.log("n1: ", this.number1)
        console.log("n2: ", this.number2)
        this.result = this.number1 + this.number2;
        console.log("result: ", this.result)
        break;
      case this.operationList[1]:
        //subtract
        this.result = this.number1 - this.number2;
        break;
      case this.operationList[2]:
        //multiply
        this.result = this.number1 * this.number2;
        break;
      case this.operationList[3]:
        //divide
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
    }
    
    this.inicialResult = 'Resultado: ' + this.result;
    this.createOperation(this.result);
    this.displayTable();
  
  }

  createOperation(result: number):void{
    const timeNow = new Date();
    const time = timeNow.getHours() + ':' +timeNow.getMinutes() + ':' + timeNow.getSeconds();
    console.log("hora: ", time);
    const operation: Operations = {
      id: "Op-" + this.idOperation,
      time: time,
      result: result,
    };
    this.calculatorService.addOperation(operation);
    this.idOperation++;
    
  }

  displayTable():void{
    //console.log("isVisible: ", this.isVisibleTable);
    if(this.calculatorService.getOperations().length != 0){
      this.titleH2= 'Historical Operations';
    }
    this.isVisibleTable = true;
    
  }
  

  cleanCalculator(): void{
    this.inputN1 = '';
    this.inputN2 = '';
    this.inicialResult = '';
    this.selectedOperation = this.operationList[0]; 

  }

  cleanOperation(id:string):void{
    this.calculatorService.deleteOperationById(id);
    if(this.calculatorService.getOperations().length === 0){
      this.titleH2= '';
    }
  }
}
