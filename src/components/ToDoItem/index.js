export default function ToDoItem({
  onToggle, onDelete, isDone, children
}) {
  const toggleLabel = isDone ? "Mark as todo" : "Mark as done";

  return (
    <div>
      <button type="button" onClick={onToggle}>
        {toggleLabel}
      </button>
      {children}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

// ako postoji neka cjelina koju možemo pojednostaviti to i napravimo
// trebaju nam propovi i logika toggleLabel
// handleOnToggle proslijedimo kroz prop koji ćemo nazvati onToggle, isto je i za handleOnDelete
// umjesto {item.text} stavimo children 