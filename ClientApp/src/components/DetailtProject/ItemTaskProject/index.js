import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import ItemTask from './../itemTask';
import FormAddTask from './../FormAddTask';
import BtnAddTask from './../BtnAddTask';

class ItemTaskProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:null
        }
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddTask = (e)=>{
        e.preventDefault();
        const listtaskid = this.props.item.id;     
        const {title} = this.state;
        const user = JSON.parse(localStorage.login);  
        const userid = user.store.userId;
        const task = {
            title: title,
            desc: '',
            userid: userid,
            statusid: "1",
            listtaskid: listtaskid,
        }
        this.props.hadleAddTask(task);
    }
    showItemTask = (taskItem)=>{
        var result =null;
            if(taskItem){
                result = taskItem.map((task ,index)=> {
                    return <ItemTask key={index} task={task}/>
                })
            }
        return result;
    }
    showFormAddTask = (showFormAddTask)=>{
        if(showFormAddTask){
            return <FormAddTask actShowFormAddTask={actShowFormAddTask}/>
        }
    }
    showBtnAddTask = (showBtnAddTask)=>{
        if(showBtnAddTask){
            return <BtnAddTask/>
        }
    }
    render() {
        const {classes,item,taskItem,showFormAddTask,showBtnAddTask,showFormAddTask} = this.props;  
        return (
            <React.Fragment>
                <Grid item lg={3}>
                    <Box mt={2} ml={2}>
                        <Card className={classes.root}>
                            <CardContent className={classes.cardContent}>
                                <Box display="flex" justifyContent="space-between">
                                    <input onChange={this.onChange} className={classes.cardInputTitle} defaultValue={item.title}/>
                                    <MoreHorizIcon className={classes.btnMore}/>
                                </Box>
                            </CardContent>
                            {this.showItemTask(taskItem)}
                            {this.showFormAddTask(showFormAddTask,showFormAddTask)}
                            {this.showBtnAddTask(showBtnAddTask)}
                        </Card>
                    </Box>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ItemTaskProject);
