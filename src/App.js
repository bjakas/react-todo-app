import ToDoItemList from "./components/ToDoItemList";
import ToDoItemForm from "./components/ToDoItemForm";

function App() {
  return (
    <div>
      <ToDoItemList />
      <ToDoItemForm />
    </div>
  );
}

export default App;



// OLD CODE

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ToDoItem from "./components/ToDoItem";
// import {
//   addItem,
//   deleteItem,
//   markItemAsDone,
//   selectAllItems,
// } from "./reducers/ToDoReducer";

// function App() {
//   const dispatch = useDispatch();
//   const todoItems = useSelector(selectAllItems);
//   //const [todoState, setTodoState] = useState([]);
//   const [formState, setFormState] = useState({ text: "" });

//   const handleOnChange = (event) => {
//     event.preventDefault();
//     setFormState((formState) => ({
//       ...formState,
//       [event.target.name]: event.target.value,
//     })); // trenutni state vrati i uzmi event.target.name i dodijeli mu event.target.value, pod name koji je text setamo novu vrijednost; kad god se promijeni input koji ima ime text u state će se pod keyem text spremiti vrijednost tog inputa; pod text spremamo event.target.value i time updateamo state i updateanjem statea smo omogoćili unos nove vrijednosti u input
//   }
//   // console.log(formState); // formState se updatea sa svakim unosom u input

//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     dispatch(addItem(formState));
//     /*     setTodoState(todoState => [
//           ...todoState,
//           { ...formState, isDone: false }
//         ]); */
//     setFormState({ text: "" }); // resetiramo obrazac na početno stanje
//   }
//   // console.log(todoState); // state našeg obrasca se sprema u niz; povezali smo obrazas da na submit obrasca uzmemo formState i upišemo ga na kraj našeg niza

//   const handleOnDelete = (item, index) => (event) => {
//     //console.log("delete", item, index, event); // vidimo što brišemo
//     dispatch(deleteItem(item));
//     /*     setTodoState((todoState) => [
//           ...todoState.slice(0, index),
//           ...todoState.slice(index + 1),
//         ]); */
//   }

//   const handleOnToggle = (item, index) => (event) => {
//     //console.log('handleOnToggle', item); 
//     // iskoristimo logiku za brisanje i ubacimo u tu rupu item samo što će isDone biti promijenjen
//     dispatch(markItemAsDone(item, !item.isDone));
//     /*     setTodoState((todoState) => [
//           ...todoState.slice(0, index),
//           { ...item, isDone: !item.isDone },
//           ...todoState.slice(index + 1),
//         ]); */
//   }

//   return (
//     <div>
//       <div>
//         {todoItems.map((item, index) =>
//           <ToDoItem
//             key={index}
//             isDone={item.isDone}
//             onDelete={handleOnDelete(item, index)}
//             onToggle={handleOnToggle(item, index)}
//           >
//             {item.text}
//           </ToDoItem>
//         )}
//       </div>
//       <form onSubmit={handleOnSubmit}>
//         <input
//           name="text"
//           type="text"
//           placeholder="Item text"
//           onChange={handleOnChange}
//           value={formState.text}
//         />
//         <button>Add item</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// koraci

// Create an item

// 1. kreiramo form - input (name, type, placeolder)
// 2. obrazcu dajemo stanje: importamo useReact da bismo mogli koristiti hook useState (formState)
// 3. obrascu dodijelimo value koje dolazi iz formState.text
// 4. definiramo onChange event i funkciju handleOnChange - preventiramo def. ponašanje i postavimo formState s novom vrijednosti kako budemo taj input mijenjali
// 5. onSubmit funkciju definiramo - handleOnSubmit - spremamo state koji će spremati naše iteme, treba nam state todoState; na handleOnSubmit uzmemo formState i guramo ga kao novi item

// List all items

// 1. Kreiramo div element da bismo ispisali iteme; mapiramo todoState tako da svaki item u nizu tododState postane div element; treba nam jedinstveni key (može s indexima) i ispišemo item.text

// Delete an item

// ili filtriramo elemente van iz niza ili ih sliceamo
// da bismo item mogli obrisati trebamo imati neko dugme za brisanje tako da u sklopu itema trebamo imati ele. s onClickom na sebi
// dodamo button s onClickom i damo mu handeOnDelete funkciju koji definiramo iznad
// handlat ćemo delete za item pod određenm indexom i sada svaki put kad kliknemo na button dobit ćemo poziv f. koja ima item i index i imat ćemo funkciju unutar funkcije
// napravimo novi array tako što ćemo uzeti todoState array i sliceat ćemo ga od početka (od 0) do indexa (ne uključujući odabrani element) i onda ćemo vratiti komad arraya koji ide od indexa + 1 (kraj ne mormo definirati jer će onda ići do samog kraja niza) od sljedećeg koraka do kraja

// Mark an item as completed

// checkbox ili button 
// da bismo znali koji je item završen ili nije moramo pratiti njegovo stanje
// u sklopu handleOnSubmit možemo nadopisati vrijednost isDone: false; isDone koristimo da pratimo je li naš item označen kao gotov ili nije, a uvijek je prvo nedovršen kada ga kreiramo
// dodamo button ako je item done napišti jedno, ako nije onda drugo
// funkcija za toggle stanja treba znati koji item treba promijeniti
// sada trebamo doraditi state da se updatea - iskoristimo logiku za brisanje i ubacimo u tu rupu item samo što će isDone biti promijenjen

