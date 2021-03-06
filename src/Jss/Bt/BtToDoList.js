import React, { Component } from "react";
import { Container } from "../ComponentJss/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../Theme/ToDoListTheme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../Theme/ToDoListTheme/ToDoListLightTheme";
import { Dropdown } from "../ComponentJss/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../ComponentJss/Heading";
import { TextField, Lable, Input } from "../ComponentJss/TextField";
import { Button } from "../ComponentJss/Button";
import { Table, Thead, Tbody, Tr, Td, Th } from "../ComponentJss/Table";
import { connect, Connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  doneTaskAction,
  deletedTaskAction,
  editTaskAction,
  updateTask,
} from "../../redux/actions/ToDoListAction";
import { arrTheme } from "../Theme/ToDoListTheme/ThemeManager";
import { change_theme } from "../../redux/types/ToDoListType";

class BtToDoList extends Component {
  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.dispatch(deletedTaskAction(task.id));
                }}
              >
                {" "}
                <i className="fa fa-trash"></i>{" "}
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.dispatch(editTaskAction(task));
                }}
              >
                {" "}
                <i className="fa fa-edit"></i>{" "}
              </Button>
              <Button className="ml-1">
                {" "}
                <i
                  className="fa fa-check"
                  onClick={() => {
                    this.props.dispatch(doneTaskAction(task.id));
                  }}
                ></i>{" "}
              </Button>
              <Button
                className="ml-1"
                onClick={() => {
                  this.props.dispatch(deletedTaskAction(task.id));
                }}
              >
                {" "}
                <i className="fa fa-trash"></i>{" "}
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  state = {
    taskName: "",
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };
  render() {
    let { themeToDoList } = this.props;
    return (
      <ThemeProvider theme={themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              //dispatch value l??n reducer
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3 className="pt-2">To Do List</Heading3>
          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              this.setState(
                {
                  taskName: e.target.value,
                },
                console.log(this.state)
              );
            }}
            name="taskName"
            label="task name"
            className="w-50"
          />
          <Button
            className="ml-2"
            onClick={() => {
              //l???y th??ng tin t??? input
              let { taskName } = this.state;
              //t???o ra 1 task object
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };

              //????a task object l??n redux th??ng qua phuwogn th???c dispatch
              this.props.dispatch(addTaskAction(newTask));
            }}
          >
            {" "}
            <i className="fa fa-plus"></i> Add Task
          </Button>
          <Button
            className="ml-2"
            onClick={() => {
              let { taskName } = this.state;
              this.setState(
                {
                  taskName: "",
                },
                () => this.props.dispatch(updateTask(taskName))
              );
            }}
          >
            {" "}
            <i className="fa fa-upload"></i> Update Task
          </Button>
          <Heading3 className="pt-5">Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3 className="pt-5">Task Completed</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  //????y l?? h??m lifecycle tr??? v??? props v?? state c?? c???a component tr?????c khi render (lifecycle n??y chay sau khi render)
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(BtToDoList);
