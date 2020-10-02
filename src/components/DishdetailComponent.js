import React ,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail  extends Component{
    constructor(props){
        super(props);


        this.state={
            selectedDish:this.props.selectedDish
        }
    }
    renderDish(dish){
        return(
            
            <Card>
               <CardImg width="100%" object src={dish.image} alt={dish.name}/> 
               <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
        )
    }
    renderComments(dish){
        const comments = dish.comments.map((comm)=>{
            return(
                <ul class="list-unstyled">
                     <li>{comm.comment}</li>
                     <li>-- {comm.author} , {comm.date}</li>
                </ul>
               
            );
        });
                  

      return comments
    }


    render(){
        if(this.props.selectedDish !=null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
        
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.selectedDish)}
        
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;