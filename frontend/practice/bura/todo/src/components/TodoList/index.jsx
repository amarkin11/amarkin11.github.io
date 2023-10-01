import TodoListItem from "../TodoListItem";
import './index.css';

const TodoList = ({
  todos, onDeleted, onToggleImportant, onToggleDone
}) => {

  return (
    <ul className="todo-list list-group">
      {
        todos.map((item, i) => {
          const { id, ...itemProps } = item;
          // console.log(itemProps);

          return (
            <li className="list-group-item" key={ id }>
              <TodoListItem
                { ...itemProps }
                onDeleted={() => onDeleted(id)}
                onToggleImportant={ () => onToggleImportant(id) }
                onToggleDone={ () => onToggleDone(id) }
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default TodoList;
