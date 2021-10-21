import { useDispatch, useSelector } from "react-redux";
import { deleteItem, markItemAsDone, selectAllItems } from "../../reducers/ToDoReducer";
import ToDoItem from "../ToDoItem";

export default function ToDoItemList() {
  const dispatch = useDispatch();
  const todoItems = useSelector(selectAllItems);

  const handleOnDelete = (item, index) => (event) => {
    dispatch(deleteItem(item));
  }

  const handleOnToggle = (item, index) => (event) => {
    dispatch(markItemAsDone(item, !item.isDone));
  }

  return (
    <div>
      {todoItems.map((item, index) =>
        <ToDoItem key={index}
          isDone={item.isDone}
          onDelete={handleOnDelete(item, index)}
          onToggle={handleOnToggle(item, index)}
        >
          {item.text}
        </ToDoItem>
      )}
    </div>
  );
}

// importamo ToDoItemList u app componentu
// lista se bavi ispisom itema koje smo kreirali