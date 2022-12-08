import React from 'react'

import HOC from './HOC'
const Todos = ({data}) => {
    // const[todo,setTodo] = useState([])
    // const [term,setTerm] = useState('');
    // useEffect(() => {

    //     const todoFetch = async () => {
    //         axios.get('https://jsonplaceholder.typicode.com/todos').then(res => setTodo(res.data)  )
    //     }

    //     todoFetch() 
    //         console.log(todo)       
    // },[])
    // const filteredtodos = todo.slice(0,10).filter(({title}) => {
    //     return title.indexOf(term) >= 0
    //   }).map(item => (
    //     <h3>{item.title}</h3>
    //   ))

    const renderTodo = data.map(item => (
        <h3>{item.title}</h3>
    ))
  return (
      <>
          {/* <input type='text' value={term} onChange={(e) => setTerm(e.target.value)}/> */}
          <div >
              {
                renderTodo  
              }
          </div>
    </>
    
  )
}

const SearchTodos = HOC(Todos, 'todos')
export default SearchTodos;