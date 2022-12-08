import React from 'react'
import axios from 'axios'
const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
    state = {
        data:[],
        term:''
    }

    componentDidMount(){
        const todoData = async () => {
            axios.get(`https://jsonplaceholder.typicode.com/${entity}`).then(res => this.setState({...this.state, data:res.data})  )
        }

        todoData() 
    }
    render(){
        let{data, term} = this.state;
        let filteredData = data.slice(0,10).filter(d => {
            if(entity === 'users'){
                const {name} = d;
                return name.indexOf(term) >= 0;
            }
            if(entity === 'todos'){
                const {title} = d;
                return title.indexOf(term) >= 0;
            }
          })

        return(
            <>
                <h2>{entity}</h2>
                <input type='text' value={term} onChange={(e) => this.setState({...this.state, term:e.target.value})}/>
                <WrappedComponent data={filteredData}></WrappedComponent>
            </>
        )

    }
  }
}

export default HOC