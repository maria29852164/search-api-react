import React,{Component} from 'react'

export default class Search extends Component{
    state={
        data:''
    }
    ref=React.createRef();
    getData=(event)=>{
        event.preventDefault();
        let value=this.ref.current.value
        this.props.search(value)
     

        
        
    }
    render(){
        return (
            <div className="container-fluid">
                <form className="row" onSubmit={this.getData}>

                    <div className="form-group col-md-8">
                        <input className="form-control form-control-lg" ref={this.ref} name="search" placeholder="search ..."/>

                    </div>
                    <div className="form-group col-md-4">
                        <input className="form-control btn btn-lg btn-block btn-success" type="submit" value="Search"/>
                    </div>
                    {this.state.data}
                    

                </form>
                

            </div>
        );
    }

}

