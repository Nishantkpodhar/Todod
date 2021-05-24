import React from 'react'
import { Button, ButtonGroup} from 'reactstrap'
import {filterTodo } from '../../store/actions/TodoAction';
import {connect } from 'react-redux'
const TopNav = (props) =>{
    let {filterTodo} = props;
    return (
             <ButtonGroup style={{marginLeft:'56px'}}>
                <Button color="primary" onClick={() => filterTodo('ALL')}>All</Button>
                <Button color="danger" onClick={() => filterTodo('ACTIVE')} >Active</Button>
                <Button color="success" onClick={() => filterTodo('COMPLETE')} >Done</Button>
             </ButtonGroup>
      
    )
}

export default connect(null, {filterTodo})(TopNav);