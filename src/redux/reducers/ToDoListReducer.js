import { arrTheme } from '../../Jss/Theme/ToDoListTheme/ThemeManager'
import { ToDoListDarkTheme } from '../../Jss/Theme/ToDoListTheme/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Jss/Theme/ToDoListTheme/ToDoListLightTheme'
import { add_task, change_theme, deleted_task, done_task, edit_task, update_task } from '../types/ToDoListType'

const stateDefaut = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task 1', taskName: 'task 1', done: true },
        { id: 'task 2', taskName: 'task 2', done: false },
        { id: 'task 3', taskName: 'task 3', done: true },
        { id: 'task 4', taskName: 'task 4', done: false }

    ],
    taskEdit: { id: 'task 2', taskName: 'task 2', done: false }
}

export const ToDoListReducer = (state = stateDefaut, action) => {
    switch (action.type) {
        case add_task:
            {

                //kiểm tra rỗng
                if (action.newTask.taskName.trim() === '') {
                    alert('nhập vào task name')
                    return {...state }
                }

                //kiểm tra tồn tại
                let taskListUpdate = [...state.taskList];

                let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName)
                if (index !== -1) {
                    alert('task name already exits')
                    return {...state }
                }
                taskListUpdate.push(action.newTask)
                // xử lý xong thì gắn lại task list hiện tại
                state.taskList = taskListUpdate;
                return {...state }
            }
        case change_theme:
            {
                //tìm theme dựa vào action.themeId được chon
                let theme = arrTheme.find(theme => theme.id == action.themeId)
                if (theme) {
                    state.themeToDoList = {...theme.theme }

                }
                return {...state }
            }
        case done_task:
            {
                let taskListUpdate = [...state.taskList];
                let index = taskListUpdate.findIndex(task => task.id == action.taskId);
                if (index !== -1) {
                    taskListUpdate[index].done = true;
                }
                state.taskList = taskListUpdate;
                return {...state }
            }
        case deleted_task:
            {
                // let taskListUpdate = [...state.taskList];
                // //gán lại giá trị update chính bằng nó nhưng filter không có taskid truyền vào
                // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);
                return {...state, taskList: state.taskList.filter(task => task.id !== action.taskId) }
            }
        case edit_task:
            {
                return {...state, taskEdit: action.task }
            }

        case update_task:
            {
                state.taskEdit = {...state.taskEdit, taskName: action.taskName };

                let taskUpdate = [...state.taskList];
                let index = taskUpdate.findIndex(task => task.id === state.taskEdit.id);

                if (index !== -1) {
                    taskUpdate[index] = state.taskEdit
                }
                state.taskList = taskUpdate
                return {...state }
            }
        default:
            return {...state }
    }
}