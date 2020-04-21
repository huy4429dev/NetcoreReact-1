import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './style';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';

class FormAddTask extends Component {
    showAddForm =()=>{
        this.props.showAddForm();
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleAddTask}>
                    <input onChange={this.onChange}  name ="title" className={classes.addTask}/>
                        <CardActions  display="flex">
                                <Button size="small" type="submit" onClick={this.showAddForm} className={classes.btnAddCard}>Thêm thẻ</Button>
                                <CloseIcon className={classes.btnClose}/>
                        </CardActions>
                </form>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(FormAddTask);
