import { AfterViewInit, Component, InputDecorator, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  public count!: number;
  @ViewChild('taskInput') taskInput!: HTMLInputElement;
  @Output() fromChild = new EventEmitter();
  
  public taskArray: Array<any> = [
    {
      name: 'HTML5',
      status: 'DONE',
      defaultChecekd: true
    },
    {
      name: 'CSS3',
      status: 'DONE',
      defaultChecekd: true
    },
    {
      name: 'SCCS',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'JavaScript',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'Jquery',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'Angular',
      status: 'IN PROGRESS',
      defaultChecekd: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.fromChild.emit(this.taskArray);
  }

  addTask() {
    if (document.querySelector<HTMLInputElement>('.task-input')!.value !== '') {
      const newTask = {
        name: document.querySelector<HTMLInputElement>('.task-input')!.value,
        status: 'IN PROGRESS'
      }

      this.taskArray.push(newTask);
      document.querySelector<HTMLInputElement>('.task-input')!.value = '';

    }
  }

}