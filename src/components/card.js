import React ,{Component} from 'react'
import Images from './images'

export default class Card extends Component{
    referencia=React.createRef();
    state={
        images:[]
       // card:''
    }
    sendCard=()=>{
        let values=this.props.images
        if( values.length === 0){
            return null
        }
        //console.log(values)
   
       return(
           <React.Fragment>
               <div className="col-12 p-5 row">
                    {values.map(value=>{
                        return <Images key={value.id} values={value}/>
                    })
                        
                    }
               </div>
           </React.Fragment>

       )

         
      

    }
  
    render(){
        return(
            <React.Fragment>
                {this.sendCard()}
            </React.Fragment>
        );
    }
}