import { useDispatch, useSelector } from "react-redux";
import { deleteItem, markItemAsDone, selectAllItems } from "../../reducers/ToDoReducer";
import ToDoItem from "../ToDoItem";

// selektiramo iteme i mapiramo ih
// unutar ToDoItemListe imamo još i logiku koju odvojimo u zasebnu componentu ToDoItem

export default function ToDoItemList() {
  const dispatch = useDispatch(); // pozovemo useDispatchda dobijemo f. dispatch za slanje akcija u store
  const todoItems = useSelector(selectAllItems); // vrati mi itemse iz našeg selektiranog statea (useSelector nam daje mogćnost da rukujemo sa čitavim stateom u našem redux storeu koji je dio tog providera) i ovdje onda možemo sa selektorom reći iz tog statea izvuci mi specifični property, konkretno items; takod a nama selektor uzima state i izvući će nam items i spremiti u toDoItems varijablu const todoItems = useSelector(state => state.items); u reduceru definiramo selektor; selektor ne definiramo sami nego ga importamo kroz reducerselectAllItems; prebacili smo selektor u metodu unutar reducera i tu smo importali;

  // dispatchamo svaku pojedinu akciju addItem, deleteItem, markItemAsDone

  const handleOnDelete = (item, index) => (event) => {
    dispatch(deleteItem(item)); // importamo akciju koja nam treba; dispatchamo akciju s potrebnim parametrima
  }

  const handleOnToggle = (item, index) => (event) => {
    dispatch(markItemAsDone(item, !item.isDone)); // importamo akciju koja nam treba; dispatchamo akciju s potrebnim parametrima
  }

  return (
    <div>
      {todoItems.map((item, index) =>
        <ToDoItem key={index}
          isDone={item.isDone}
          onDelete={handleOnDelete(item, index)}
          onToggle={handleOnToggle(item, index)}
        >
          {item.text} {/*  child od ToDoItem-a */}
        </ToDoItem>
      )}
    </div>
  );
}

// importamo ToDoItemList u app componentu
// lista se bavi ispisom itema koje smo kreirali
// možemo razdvojiti na logički i prezentacijski dio i ubaciti komponentu (imali bismo 3 js-a: 1. logički, 1. prezentacijski i index.js kojeg exportamo)