import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import styles from './style';

class ButtonAddTasks extends Component {
    showFormAddListTask = ()=>{
        const {showFormAddListTask} = this.props;
        showFormAddListTask();
    }
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Box>
                    <Button onClick={this.showFormAddListTask}  className={classes.buttonAdd}>
                        <AddIcon/>Thêm công việc mới
                    </Button>
                </Box>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ButtonAddTasks)