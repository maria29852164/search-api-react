import React ,{Component} from 'react';

import Search from './components/search';

export default class App extends Component {
  state={
    search:''
  }
  getSearch=(term)=>{
    this.setState({search:term},()=>this.queryApi())
   


  }
  queryApi=()=>{
    const url=`https://pixabay.com/api/?key=15015090-6a1514d74b47f80bc038339d3&q=${this.state.search}`
    //console.log(url)
    fetch(url).then(res=>{
      return res.json()
    }).then(data=>console.log(data))

  }
  
 
  render(){
    return (
      <div className="container">
            <div className="jumbotron">
              <p className="lead text-ceneter">Search images</p>
              <Search search={this.getSearch}/>
              {this.state.search}
            </div>

            
        
          
       
      </div>
    )

  }
  
}


