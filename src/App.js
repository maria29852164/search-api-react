import React ,{Component} from 'react';

import Search from './components/search';

export default class App extends Component {
  state={
    search:''
  }
  getSearch=(term)=>{
    this.setState({search:term})
    console.log(term)

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


