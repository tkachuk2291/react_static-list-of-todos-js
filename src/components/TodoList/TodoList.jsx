import { TodoInfo } from '../TodoInfo';
export const TodoList = ({TodoElements}) => {
  console.log(TodoElements)
  return (
    <section className="TodoList">
      {TodoElements.map(TodoElement => (
       <TodoInfo TodoElementInfo={TodoElement} key={TodoElement.id} />
      ))}
    </section>
  )}

