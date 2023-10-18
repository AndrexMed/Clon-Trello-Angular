import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';
import { faAdd, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

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

  constructor(private dialog: Dialog) { }

  @ViewChild('boardOverlay') boardOverlay!: CdkOverlayOrigin;

  isOpen = false

  faAdd = faAdd
  faEllipsis = faEllipsis

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
      title: "Done",
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
      // moveItemInArray(this.toDos, $event.previousIndex, $event.currentIndex)
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
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

  addColumn() {
    this.columns.push({
      title: "New Column",
      todos: []
    })
  }

  openDialog() {
    this.dialog.open(TodoDialogComponent, {
      minWidth: "300px",
      maxWidth: "50%",
      autoFocus: false
    })
  }
}
