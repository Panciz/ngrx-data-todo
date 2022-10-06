import { EntitySelectorsFactory } from "@ngrx/data";
import { createSelector } from "@ngrx/store";
import { Todo } from "../dto/todo";

export const todoSelectors = new EntitySelectorsFactory().create<Todo>('Todo');

export const selectTodoByCategory = (category: string) => createSelector(
  todoSelectors.selectEntities,
  (data) => data.filter(c => c.todoCategory.name === category)
);
