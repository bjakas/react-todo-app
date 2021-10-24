import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/ToDoReducer';

export default function ToDoItemForm() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ text: "" });

  const handleOnChange = (event) => {
    event.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  }

  // dispatchamo svaku pojedinu akciju addItem, deleteItem, markItemAsDone

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(formState)); // iz reducera importamo akciju koja nam treba; dispatchamo akciju addItem s potrebnim parametrima
    setFormState({ text: "" });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input name="text" type="text" placeholder="Item text"
        onChange={handleOnChange}
        value={formState.text}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

// ideja je da obrazac i state stavljamo u zasebnu komponentu
// uvijek prvo ubacimo u return iz app.js-a što imamo pa uređujemo
// handlere prebacimo iz app.ja-a
// importamo hook za useState 
// importamo useDispatch i addItem 
// koristimo hook da bismo vratili dispatch funkciju - const dispatch = useDispatch();
// importamo obrazac u app componenti ToDoItemForm i izbrišemo kod koji smo tu prebacili