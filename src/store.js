export const initialStore = () => {
  return {
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
    deleteTrigger: false,
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_contactos":

      const listaDeContactos = action.payload

      return {
        ...store,
        contactos: listaDeContactos
      }

    case 'eliminar_contacto':
      console.log('eliminar_contacto')
      return {
        ...store,
        deleteTrigger: !store.deleteTrigger
      }

    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    default:
      throw Error('Unknown action.');
  }
}
