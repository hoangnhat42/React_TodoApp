import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddToDo";
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Footer from "../store/containers/Footer";

/* class TodoApp extends React.Component { 
    
    state = {
        todos: []

    };

    handleCheckboxChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response =>  this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                    })
                ]
        }))
    };
    //Fake do JSONPlaceholder API khong cho luu vao database
    addTodo = title => {
        const todoData = { 
            title: title, //Trong du lieu tra ve cua REST API co gia tri unique r nen khkong can UUID nua
            completed: false 
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
        .then(response => {
            console.log(response.data)
         this.setState({ 
            todos: [...this.state.todos, response.data] 
        })
    });
};

    componentDidMount() {
        const config = {
            params: {
                _limit: 5
            }
        }

        //tạo GET request để lấy danh sách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
        .then(response => this.setState({ todos: response.data }));
    }



    render() { 
        return ( 
            <div className="container"> 
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos  todos={this.state.todos} 
                        handleChange={this.handleCheckboxChange}
                        deleteTodo={this.deleteTodo} />
            </div> 
            ); 
        } 
    } export default TodoApp; */


    function TodoApp() {

        const [state, setState] = useState({
            todos: []
        });
        const handleCheckboxChange = id => {
            setState({
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            });
        };
        const deleteTodo = id => {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(reponse => setState({
                    todos: [
                        ...state.todos.filter(todo => {
                            return todo.id !== id;
                        })
                    ]
                }))
        };
    
        const addTodo = title => {
            const todoData = {
                title: title,
                completed: false
            }
            axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
                .then(response => {
                    console.log(response.data)
                    setState({
                        todos: [...state.todos, response.data]
                    })
                });
        };
    
        useEffect(() => {
            const config = {
                params: {
                    _limit: 5
                }
    
            }
            // tạo GET request để lấy danh sách todos
            axios.get("https://jsonplaceholder.typicode.com/todos", config)
                .then(response => setState({ todos: response.data }));
        }, []);
    
        return (
            <div className="container">
                <Header />
                <AddTodo addTodo={addTodo} />
                <Todos todos={state.todos}
                    handleChange={handleCheckboxChange}
                    deleteTodo={deleteTodo} />
                <Footer />
            </div>
        );
    
    }
    export default TodoApp;
    