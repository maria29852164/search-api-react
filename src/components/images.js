import React,{Component} from 'react'
import './app.css'

export default class Images extends Component{
    
    render(){
        return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
             <div className="card text-white bg-primary mb-3 " >
            <div className="card-header text-center">
                    Tags {this.props.values.tags}
                    
            </div>
            <div className="card-body text-center ">
                <h4 className="card-title ">Likes: {this.props.values.likes}</h4>
                <img src={this.props.values.largeImageURL}  className="img-thumbnail app-card"></img>
                <a  href={this.props.values.largeImageURL} target="_blank" className="btn btn-block btn-lg btn-primary my-2">View Image</a>
            </div>
           </div>
            </div>
           
        )
    }
}