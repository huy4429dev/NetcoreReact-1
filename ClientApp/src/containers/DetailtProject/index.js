import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './style';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import arrayMove from 'array-move';
import ListTaskProject from './../../components/DetailtProject/ListTaskProject/index';
import FormAddTasks from '../../components/DetailtProject/FormAddTasks';
import ButtonAddTasks from '../../components/DetailtProject/ButtonAddTasks';
import Header from '../../components/Header';

class DetailtProject  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','item6']
        }
    }
    onSortEnd({oldIndex, newIndex}) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }
    render() {
        const {classes,match,location,history} = this.props;
        console.log('match',match);
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
                        <ButtonAddTasks/>
                        <FormAddTasks/>
                        <ListTaskProject items={this.state.items} onSortEnd={this.onSortEnd.bind(this)}/>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(DetailtProject);