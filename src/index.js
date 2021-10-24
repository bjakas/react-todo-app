import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toDoReducer from './reducers/ToDoReducer';

// umotamo čitavu app u naš redux store; importamo reducer def. exportom pa dajemo naziv koji god želimo; kreiramo store i u sklopu react reduxa koji importamo izvučemo provider i umotamo aplikaciju u provider tog contexta

const toDoStore = createStore(toDoReducer); // koristili smo metodu createStore redux apija za izradu toDoStorea na temelju toDoReducera kojeg smo definirali maloprije i koristili smo provider za context samog reducera kojem smo proslijedili store koji omotava našu app komponentu tako da App komponenta i njeni childeovi mogu pristupiti redux storeu; sad možemo u App comp koristit store, dispatchat akcije da bi prikazali, odnosno rukovali s itemima u storeu i onda prikazivali te rezultate; sad se vraćamo u App comp i importamo iz react reduxa hookove useDispatch (za dispatchanje akcija) i use Selector (za selektiranje itema iz našeg storea, odnosno statea koji se nalazi u storeu) - logiku smo razdvojili u compoente pa je sada u komponentama umjesto u App.js-u (1. kreiramo componentu ToDoItemList, zatim 2. ToDoItem i 3. ToDoItemForm)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={toDoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
