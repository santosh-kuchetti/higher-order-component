import React from 'react'
import axios from 'axios'
import HOC from './HOC'
const Users = ({data}) => {
    // const[user,setUser] = useState([])
    // const [term,setTerm] = useState('');
    // useEffect(() => {

    //     const userFetch = async () => {
    //         axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUser(res.data)  )
    //     }

    //     userFetch()
        
            
            
    //         console.log(user)
        
        
    // },[])
    // const filteredusers = user.filter(({name}) => {
    //     return name.indexOf(term) >= 0
    //   }).map(item => (
    //     <h3>{item.name}</h3>
    //   ))

    let renderUser = data.map(item => (
        <h3>{item.name}</h3>
    ))

  return (
      <>
    {/* <input type='text' value={term} onChange={(e) => setTerm(e.target.value)}/> */}
          <div >
              {
                renderUser  
              }
          </div>
    </>
    
  )
}

const SearchUsers = HOC(Users,'users')
export default SearchUsers