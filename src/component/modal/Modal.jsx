import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/TodoAction";
class Modals extends React.Component {
  state = {
    modal: false,
    title: "",
    description: "",
    type: "",
    Dueat: "",
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandle = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
    let id = parseInt(Date.now());
    const todo = {
      title: this.state.title,
      description: this.state.description,
      type: this.state.type,
      Dueat:this.state.Dueat,
      isComplete: false,
      id: id,
    };
    this.props.addTodo(todo);
    this.setState({
      modal: !this.state.modal,
      title: "",
      description: "",
      type: "",
      Dueat: "",
    });
  };

  render() {
    let { title, description,type,Dueat} = this.state;
    return (
      <div>
        <Button
          style={{ marginTop: "-67px" }}
          color="danger"
          onClick={this.toggle}
        >
          Add
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Create new Todo</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitHandle}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  onChange={this.changeHandler}
                  required
                  value={title}
                  name="title"
                  id="title"
                  placeholder="Todo Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Message</Label>
                <Input
                  type="textarea"
                  required
                  onChange={this.changeHandler}
                  value={description}
                  name="description"
                  id="description"
                  placeholder="Todo description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Type</Label>
                <Input type="select" name="type" id="exampleSelect" onChange={this.changeHandler} value={type}>
                  <option>Success</option>
                  <option>Error</option>
                  <option>Warrning</option>
                  <option>Critical</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="Dueat">Due at</Label>
                <Input
                  className="dueat"
                  name="Dueat"
                  type="datetime-local"
                  value={Dueat}
                  onChange={this.changeHandler}
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(Modals);
