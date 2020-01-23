import React ,{Component} from 'react';

import Search from './components/search';
import Card from './components/card'

export default class App extends Component {
  state={
    search:'',
    images:[]
  }
  getSearch=(term)=>{
    this.setState({search:term},()=>this.queryApi())
   


  }
  queryApi=()=>{
    const url=`https://pixabay.com/api/?key=15015090-6a1514d74b47f80bc038339d3&q=${this.state.search}`
    //console.log(url)
    fetch(url).then(res=>{
      return res.json()
    }).then(data=>this.setState({images:data.hits}))

  }
  
 
  render(){
    return (
      <div className="container">
            <div className="jumbotron">
              <p className="lead text-ceneter">Search images</p>
              <Search search={this.getSearch}/>
              {this.state.search}
            </div>

            <Card images={this.state.images}/>
            



            
        
          
       
      </div>
    )

  }
  
}


