import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="TODO";
  showComplete=true;

  private list = new TodoList('Yamila', [
    new TodoItem('Go to the gym'),
    new TodoItem("Read Shelock Holmes' book"),
    new TodoItem('Go to run with my dog'),
  ]);

  get username(): string {
    return this.list.user;
  }
  get itemCount(): number{
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
   // return this.list.items;
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string): void{
    if (newItem !=''){
      this.list.addItem(newItem);
    }
  }
}

