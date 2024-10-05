import { Form } from "./components/form";
import { Logo } from "./components/logo";
import { PackingList } from "./components/packingList";
import { Stats } from "./components/stats";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (!confirmed) return;
    setItems([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
