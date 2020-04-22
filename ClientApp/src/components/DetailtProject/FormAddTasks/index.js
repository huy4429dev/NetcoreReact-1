import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

class FormAddTasks extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            desc:'',
        }
    }
    
    onChang = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleAddListTask = (e)=>{
        e.preventDefault();
        const { handleAddListTask } = this.props;
        const {title,desc} = this.state;
        const {match} = this.props;
        const projectId = match.params.id;
        const login = JSON.parse(localStorage.login);
        const userid = login.store.userId;
        const listtask = {
            title: title,
            desc: desc,
            userId: userid,
            projectId: projectId
        } 
        handleAddListTask(listtask);
    }
    hideFormAddLisTask = ()=>{
        this.props.hideFormAddLisTask();
    }
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Box>
                    <Card className={classes.cardAdd}>
                        <form onSubmit={this.handleAddListTask}>
                            <CardContent>
                                <Box>
                                    <input onChange={this.onChang} name="title" placeholder="Nhập tiêu đề ..." className={classes.cardInput}/>
                                </Box>
                                <Box mt={1}>
                                    <input onChange={this.onChang} name="desc" placeholder="Nhập mô tả ..." className={classes.cardInput}/>
                                </Box>
                            </CardContent>
                            <CardActions  display="flex">
                                <Button size="small" type="submit" className={classes.btnAddCard}>Thêm thẻ</Button>
                                <CloseIcon onClick={this.hideFormAddLisTask} className={classes.btnClose}/>
                            </CardActions>
                        </form>
                    </Card>
                </Box>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(FormAddTasks);
