import React from 'react'
import { ListGroupItem, Button,Glyphicon } from 'reactstrap';
import './index.css';

const AddToDo = (props) => {
    return (
        <div>
            <ListGroupItem style={{backgroundColor:'rgb(153, 163, 250)'}} >{props.value}<Button onClick={props.onDelete} className="button-delete " color="danger" outline ><span className="glyphicon glyphicon-trash"></span> </Button></ListGroupItem>
        </div>
    )
}

export default AddToDo
