import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
          /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent {

  columns: Column[] = [
    {
      title: "To Do",
      todos: [
        {
          id: 1,
          title: "Task 1"
        },
        {
          id: 2,
          title: "Task 2"
        },
      ]
    },
    {
      title: "Doing",
      todos: [
        {
          id: 3,
          title: "Task 3"
        },
      ]
    },
    {
      title: "Doing",
      todos: [
        {
          id: 4,
          title: "Task 4"
        },
      ]
    }
  ]

  toDos: ToDo[] = []
  doing: ToDo[] = []
  done: ToDo[] = []

  drop($event: CdkDragDrop<ToDo[]>) {
    //Forma1
    if ($event.previousContainer === $event.container) {
      moveItemInArray(this.toDos, $event.previousIndex, $event.currentIndex)
      console.log($event)
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      )
    }
  }

  addColumn(){
    this.columns.push({
      title: "New Column",
      todos: []
    })
  }
}
