import ToDo from "../ToDo/ToDo";
import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  const toDoList = props.lists.map((list) => {
    return (
      <ToDo
        key={list.id}
        task={list.task}
        index={list.id}
        onDelete={props.onDelete}
      />
    );
  });
  return <div className={styles.toDoList}>{toDoList}</div>;
};

export default ToDoList;
