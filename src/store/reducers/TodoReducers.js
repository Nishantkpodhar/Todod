import {
  ADD_TODO,
  MARK_DONE,
  FILTER_TODO,
  REMOVE_TODO,
} from "../actions/actionType";
const init = {
  todos: [
    {
      title: "Meetup Today",
      description: "Today i want to meet my friend and ........... ",
      type: "Sucess",
      Dueat: "",
      isComplete: false,
      id: 1563217752827,
    },
    {
      title: "Done The project",
      description: "30 jun must be complete the project",
      isComplete: true,
      type: "Sucess",
      Dueat: "",
      id: 1563217752858827,
    },
  ],
  filter: "ALL",
};
const Todos = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let todos = [...state.todos];
      todos = [action.payload, ...todos];
      return {
        ...state,
        todos,
      };
    }
    case MARK_DONE: {
      let todos = [...state.todos];
      todos = todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    }

    case FILTER_TODO: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    case REMOVE_TODO: {
      const todos = removeTodo(state.todos, action.payload);
      return {
        ...state,
        todos,
      };
    }

    default:
      return state;
  }
};

export default Todos;

function removeTodo(todos, id) {
  return (todos = todos.filter((todo) => todo.id !== id));
}
