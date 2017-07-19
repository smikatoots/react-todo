import React from 'react'
import ReactDOM from 'react-dom'
import InputLine from './InputLine';
import TodoList from './TodoList';


var dummyData = [
    {
        taskText: 'Make an app',
        completed: false
    },
    {
        taskText: 'Write your life goals',
        completed: true
    },
    {
        taskText: 'Project your future',
        completed: false
    }
]

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.setState({todos: dummyData})
    }

    render() {
        return (
            <div>
                <InputLine />
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp;
