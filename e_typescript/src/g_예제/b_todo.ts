// b_todo.ts

//! 타임스크립트 TODO 리스트 구현

/*
& 데이터 구조
  - 여러 개의 할 일을 저장할 수 있는 배열
  - 각 할 일은 객체타입

  EX) 상품들-상품 / 회원들-회원 / 할일들(TodoItemp[])-할일(TodoItem)

  cf) 배열 타입 정의: 요소타입[]

& 요구사항 정리
  1. Todo(할 일, 객체) 항목의 인터페이스 정의(TodoItem)
  : id(고유값, number), task(할 일 내용, string), completed(완료 여부, boolean)


  2. 각 할 일들을 todos 배열로 관리

  3. 할 일 리스트를 관리하는 함수 구현
    - addTodo (추가)
    - completedTodo (수정) - 요소 배열 변환 X -> map
    - deleteTodo (삭제) - 요소 배열 변환 O -> filter
*/

//% 1. 할 일의 객체 인터페이스 명시
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//% 할 일 추가 함수
function addTodo(todos: TodoItem[], task: string): TodoItem[] {
  const newTodo: TodoItem = {
    id: Math.max(0, ...todos.map((todo) => todo.id)) + 1,
    task: task,
    completed: false,
  };

  const newTodos = [...todos, newTodo];

  return newTodos;
}

//^ 2. 요구 사항 정리 (map & filter 사용)

// 4) 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)
// 6) 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)
// function setAllTodosCompletion(todos: TodoItemp[]) {
//   const changeTodos = todos.map((todo) => todo.completed);

//   return changeTodos;
// }

//^ 3. 프로그램 구현
// 1) 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)
function editTodo(todos: TodoItem[], id: number) {
  const changeTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, task: todo.task } : todo
  );
  return changeTodos;
}

// 2) 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)
function clearCompleted(todos: TodoItem[], completed: boolean) {
  const changeTodos = todos.filter((todo) => todo.completed !== true);

  return changeTodos;
}

// 3) 모든 Todo 항목을 조회하는 함수(getAllTodos)
function getAllTodos(todos: TodoItem[]) {
  const allTotos = todos.filter((todo) => todo);

  return allTotos;
}

// 5) 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)
function toggleTodo(todos: TodoItem[], id: number) {
  const changeTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: todo.completed } : todo
  );
  return changeTodos;
}

//^ 4. 프로그램 실행
let todos: TodoItem[] = [];
