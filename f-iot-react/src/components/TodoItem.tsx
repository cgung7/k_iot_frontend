import type { Todo } from '@/_practice/c_hooks/TodoAppLocalStorage'
import React from 'react'

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div>
      <li>
        <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
        onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    </div>
  )
}

export default TodoItem