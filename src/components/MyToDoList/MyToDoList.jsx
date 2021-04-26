import styles from "./MyToDoList.module.css";
import { Component } from "react";
import InputForm from "./components/InputForm/InputForm";
import ToDoList from "./components/ToDoList/ToDoList";
import TaskIndicator from "./components/TaskIndicator/TaskIndicator";


class MyToDoList extends Component {
  state = {
    lists: [ { task: "Keep calm and carry on", id: 1 } ],
    input: "",
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleSubmit = (e) => {
    let list;
    e.preventDefault();
    if (this.state.input === "") {
      return;
    } else {
      list = { task: this.state.input, id: this.state.lists.length + 1 };
    }
    this.setState({ lists: [...this.state.lists, list], input: "" });
    document.getElementById("myForm").reset();
  };
  handleDelete = (index) => {
    const filteredList = this.state.lists.filter((list) => {
      return list.id !== index;
    });
    this.setState({ lists: filteredList });
  };
  render() {
    return (
      <div className={styles.todolist}>
        <InputForm onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <ToDoList lists={this.state.lists} onDelete={this.handleDelete} />
        <TaskIndicator number={this.state.lists.length} />
      </div>
    );
  }
}

export default MyToDoList;
