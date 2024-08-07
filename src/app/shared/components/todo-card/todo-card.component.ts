import { Component, Input } from '@angular/core';
import { ITodo } from '../../../core/model/todo.models';

export type ITodoType = 'OPEN' | 'PROGRESS' | 'TESTING' | 'DONE' ; 
export type ITodoStatus = [ 'OPEN', 'PROGRESS', 'TESTING', 'DONE'];

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input() type: ITodoType = 'OPEN';
  @Input() todo!: ITodo
}