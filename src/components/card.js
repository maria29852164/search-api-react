import React ,{Component} from 'react'

export default class Card extends Component{
    referencia=React.createRef();
    state={
        images:[],
        card:''
    }
    sendCard=()=>{
        let value=this.props.images
        if( value.length === 0){
            return null
        }
       // console.log(value)
       let card=''
       let data=document.getElementById('data');
       console.log(this.referencia.current)
        value.map(value=>{
        

         card +=`
         <div className="card text-white bg-primary mb-3" >
        <div className="card-header">Header</div>
        <div className="card-body">
            <h4 className="card-title">${value.likes}</h4>
            <img src=${value.largeImageURL} className="img img-top rounded-circle"></img>
        </div>
</div>
          
        `

            data.innerHTML+=card
            
            //console.log(this.referencia.current)
        
        }) 
         
      

    }
  
    render(){
        return(
            <div id="data">

                
                {this.sendCard()}
                {this.state.card}

             
                
                
            </div>
            
        

        );
    }
}