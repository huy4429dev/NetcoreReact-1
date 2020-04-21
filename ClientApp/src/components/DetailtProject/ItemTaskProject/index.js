import React, { Component } from 'react'
import { SortableElement} from 'react-sortable-hoc';
import {withStyles} from '@material-ui/styles';
import styles from './style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import ItemTask from './../itemTask';
import CloseIcon from '@material-ui/icons/Close';

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
            result =taskItem.map((task ,index)=>{
                return <ItemTask key={index} task={task}/>
            })
        return result;
    }
    render() {
        const {classes,item,taskItem} = this.props;    
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
                            <form onSubmit={this.handleAddTask}>
                                <input onChange={this.onChange}  name ="title" className={classes.addTask}/>
                                    <CardActions  display="flex">
                                            <Button size="small" type="submit" onClick={this.showAddForm} className={classes.btnAddCard}>Thêm thẻ</Button>
                                            <CloseIcon className={classes.btnClose}/>
                                    </CardActions>
                            </form>
                                {this.showItemTask(taskItem)}
                            <CardActions>
                                <Button size="small" type="submit"  className={classes.btnAdd}><AddIcon/>Thêm thẻ</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ItemTaskProject);
