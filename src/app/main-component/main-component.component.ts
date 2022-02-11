import {Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  public taskArray!: Array<any>;
  public index!: number;
  constructor() { }

  ngOnInit(): void { }

  getArray(data: any) {
    this.taskArray = data;
  }

  delete(index: number) {
    console.log('this.taskArray[index]', this.taskArray[index]);
    this.taskArray.splice(index, 1);
  }

  checkBoxClick(index: number) {
    if (this.taskArray[index].status === 'IN PROGRESS') {
      this.taskArray[index].status = 'DONE';
    } else {
      this.taskArray[index].status = 'IN PROGRESS';
    }
    console.log(this.taskArray[index]);
  }

  edit(index: number) {
    this.index = index;
    document.querySelector<HTMLInputElement>('.edit-input')!.value = this.taskArray[this.index].name;
    document.querySelector<HTMLInputElement>('.edit-area')!.style.display = 'flex';
  }

  save() {
    this.taskArray[this.index].name = document.querySelector<HTMLInputElement>('.edit-input')!.value;
    document.querySelector<HTMLInputElement>('.edit-input')!.value = ''
    document.querySelector<HTMLInputElement>('.edit-area')!.style.display = 'none';
  }

}