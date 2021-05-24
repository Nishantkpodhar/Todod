import React from 'react';
import { UncontrolledCollapse, CardBody, Card, Button, ListGroupItem } from 'reactstrap';

const first_style = {
  width: "40px",
  background: "#E100FF",
  height: "40px",
  display: "block",
  float: "left",
  textAlign: "center",
  borderRadius: "50%",
  padding: "7px",
  marginRight: "10px",
  textColor:'white',
}


const TodoItem = ({todo, delet, mark}) => (
<ListGroupItem style={{background:"linear-gradient(to right,#4568dc, #b06ab3)"}}>
    <div className="row"  >
      <div className="col-md-7">
        <div className="first_chrac" style={first_style}>
            {todo.title.charAt(0).toUpperCase()}
        </div>
      <span color="primary" className="d-flex" id={`toggler${todo.id}`} style={{ marginBottom: '1rem' }}>
      {todo.isComplete ? <p><strike>{todo.title}</strike></p>: <p>{todo.title}</p> }
      </span>
      <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
        <Card>
          <CardBody>
          {todo.description}
          {todo.type}
          {todo.Dueat}
          </CardBody>
          <CardBody>
          {todo.type}
          </CardBody>
          <CardBody>
          {todo.Dueat}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      </div>    
      <div className="col-md-5">
      <div className="ml-auto">
        <Button color="danger" onClick={() => delet(todo.id)} style={{marginRight:'10px'}} className="ml-auto">Delete Todo</Button>
        <Button color="primary" onClick={() => mark(todo.id)} className="mr-auto">Add Done</Button>
      </div>
      </div>
    </div>
    </ListGroupItem>   
);

export default TodoItem;