import Item from "./Item";

  function TodoList() {
    // Dati di esempio con 3 elementi
    const items= [
      { id: 1, title: 'Elemento 1', description: 'Descrizione del primo elemento' },
      { id: 2, title: 'Elemento 2', description: 'Descrizione del secondo elemento' },
      { id: 3, title: 'Elemento 3', description: 'Descrizione del terzo elemento' }
    ];
  
  
  
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <div>
          {/* Utilizzo di map() per generare componenti da un array, con key unica */}
          {items.map(item => (
            <Item 
            key={item.id} 
            item={item} 
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default TodoList;
