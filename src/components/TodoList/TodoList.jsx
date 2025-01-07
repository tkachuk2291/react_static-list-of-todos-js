import { TodoInfo } from '../TodoInfo';
export const TodoList = ({todoElements}) => {
  console.log(todoElements)
  return (
    <section className="TodoList">
      {todoElements.map(todoElement => (
       <TodoInfo todoElementInfo={todoElement} key={todoElement.id} />
      ))}
    </section>
  )}

