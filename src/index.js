import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO";

const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    }
}

const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE_TODO:
            return []
        default:
            return state;
    }
};

const store = createStore(reducer);

const PaintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(x => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.addEventListener("click",dispatchDeleteTodo);
        btn.innerText = "DEL";
        li.id = x.id;
        li.innerText = x.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(PaintToDos);

const dispatchAddToDo = text => {
    store.dispatch(addTodo(text));
}

const dispatchDeleteTodo = e => {
    const id = e.target.parentNode.id;
    store.dispatch(deleteTodo(id));
}

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo)
};

form.addEventListener("submit", onSubmit);