import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './style';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ListTaskProject from './../../components/DetailtProject/ListTaskProject/index';
import FormAddTasks from '../../components/DetailtProject/FormAddTasks';
import ButtonAddTasks from '../../components/DetailtProject/ButtonAddTasks';
import Header from '../../components/Header';
import * as actions from './../../actions/project';
import connect from './../../lib/connect';
import ItemTaskProject from './../../components/DetailtProject/ItemTaskProject';
import FormAddTask from './../../components/DetailtProject/FormAddTask'

class DetailtProject  extends Component {

    showListItemTask = (item,task,showFormAddTask,showBtnAddTask)=>{
        const {hadleAddTask} = this.props.actions;
        var result = null;
        const actShowFormAddTask = this.props.actions;
            if(item && task){
                result = item.map((item,index)=>{
                    const taskFiltered = task.filter(task=> task.listTaskId === item.id)
                            return <ItemTaskProject item={item} 
                            taskItem ={taskFiltered}
                            key={index}
                            hadleAddTask={hadleAddTask}
                            showFormAddTask={showFormAddTask}
                            showBtnAddTask={showBtnAddTask}
                            actShowFormAddTask={actShowFormAddTask}
                            />
                })
            }
        return result;
    }
    showFormAddListTask = ()=>{
        const {showFormAddListTask,match} = this.props;  
        const {handleAddListTask,hideFormAddLisTask} = this.props.actions;
        if(showFormAddListTask){
            return <FormAddTasks
                    hideFormAddLisTask={hideFormAddLisTask}
                    handleAddListTask={handleAddListTask}
                    match={match}
                    />
        }
    }
    showButtonAddTasks = ()=>{
        const {showButtonAddTasks} = this.props;
        const {showFormAddListTask} = this.props.actions;
        if(showButtonAddTasks){
            return <ButtonAddTasks 
            showFormAddListTask = {showFormAddListTask} />
        }
    }
    componentDidMount() {
        const {match} = this.props;
        const idproject = match.params.id
        const {getListTask,hadleGetTask} = this.props.actions;
        getListTask(idproject);
        hadleGetTask();
    }
    render() {
        const {classes,item,task,showFormAddTask,showBtnAddTask} = this.props;
        return (
            <React.Fragment>
                <Header/>
                <Container maxWidth="xl" className={classes.root} >
                    <Box display="flex" justifyContent="space-between" mt={7} pb={1}>
                        <Box display="flex" >
                            <Button  className={classes.buttonTitle}>Title</Button>
                            <Button  className={classes.button}>
                                Personal
                            </Button>
                            <Button className={classes.button}>
                                Private
                            </Button>
                            <Avatar className={classes.avarta}>H</Avatar>
                            <Button className={classes.button} >
                                Add
                            </Button>
                        </Box>
                        <Box>
                            <Button  className={classes.button}>
                                Show Menu
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        {this.showButtonAddTasks()}
                        {this.showFormAddListTask()}
                        <ListTaskProject>
                            {this.showListItemTask(item,task,showFormAddTask,showBtnAddTask)}
                        </ListTaskProject>
                        
                    </Box>
                </Container>
            </React.Fragment>
        )
    }

}

export default withStyles(styles)(connect(DetailtProject, state => (
    {
        showFormAddListTask:state.projectReducer.showFormAddListTask,
        showButtonAddTasks:state.projectReducer.showButtonAddTasks,
        item :state.projectReducer.item,
        task : state.projectReducer.task,
        showFormAddTask: state.projectReducer.showFormAddTask,
        showBtnAddTask:state.projectReducer.showBtnAddTask
    }
    ),actions));
