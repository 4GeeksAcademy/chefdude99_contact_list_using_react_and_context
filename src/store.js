export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contactos: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_contactos":

    const listaDeContactos = action.payload 

    return {
      ...store,
      contactos: listaDeContactos 
    }
    
    case 'add_task':
      
      const { id,  color } = action.payload
      
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      
          // case "borrar_contacto":
      
          // const contactId = action.payload;
          // return {
          //   ...store,
          //   contactos: store.contactos.filter(contact => contact.id !== contactId)
          // }

    default:
      throw Error('Unknown action.');
  }    
}
