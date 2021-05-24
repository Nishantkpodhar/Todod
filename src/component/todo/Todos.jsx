import React, { Component } from 'react'
import {ListGroup} from 'reactstrap'
import TodoItem from './item';
import {connect} from 'react-redux'
import {markDone, deleteTodo} from '../../store/actions/TodoAction'
class TodoLists extends Component {

    state = {
        collapse: true,
        isopen:true
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }


    balControl = e => {
        console.log(e)
    }

    filterTodo(todos, status) {
        switch (status) {
            case 'ACTIVE':
                return todos.filter(todo => todo.isComplete === false);
                
            case 'COMPLETE':
                return todos.filter(todo => todo.isComplete === true);
                
            default: return todos;
        }
    }
    render() {
        
        let {todos, markDone, status} = this.props;
        if(todos.length === 0) return <p>Ther are no Todo</p>
      
       let filterTodos = this.filterTodo(todos,status )
        return (
        <ListGroup>
               {filterTodos.map(todo => 
                    <TodoItem
                        colaspstate={this.state.collapse} 
                        todo={todo} key={todo.id} 
                        collap={this.toggle} 
                        mark={markDone} 
                    delet={deleteTodo} />)}
          </ListGroup>
        )
    }
}

const mapDispatchToProps = state => ({
   todos:state.todos.todos,
   status:state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoLists);