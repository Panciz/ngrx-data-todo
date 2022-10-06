import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './dto/todo';
import { AppState } from './reducers/index';
import { selectTodoByCategory } from './selectors/todo.selectors';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngRx1';
  count$: Observable<number>;
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;
  todos1$: Observable<Todo[]>;
  todos2$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>,
    private todosService: TodosService
  ) {
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
    this.todos1$ = this.store.pipe(select(selectTodoByCategory('Western')));
  }

  ngOnInit(): void {

    // this.todosService.setFilter('angular');

    this.todosService.getAll();
    // this.todosService.add({active: true, description: "added one", title: "added one", category: });
  }
}
