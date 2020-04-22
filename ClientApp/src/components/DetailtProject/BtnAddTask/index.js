import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';

class BtnAddTask extends Component {
    showFormAddTask = () =>{
        this.props.actShowFormAddTask();
    }
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CardActions>
                    <Button size="small" onCLick={this.showFormAddTask}  className={classes.btnAdd}><AddIcon/>Thêm thẻ khác</Button>
                </CardActions>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(BtnAddTask);
