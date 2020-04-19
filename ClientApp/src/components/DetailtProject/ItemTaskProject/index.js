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

class ItemTaskProject extends Component {
    render() {
        const {classes} = this.props;
        const SortableItem = SortableElement(({item}) => {
        return (
            <React.Fragment>
                <Box mt={2} ml={2}>
                    <Card className={classes.root}>
                        <CardContent className={classes.cardContent}>
                            <Box display="flex" justifyContent="space-between">
                                <input defaultValue={item} className={classes.cardInputTitle}/>
                                <MoreHorizIcon className={classes.btnMore}/>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  className={classes.btnAdd}><AddIcon/>Thêm thẻ</Button>
                        </CardActions>
                    </Card>
                </Box>
            </React.Fragment>
            );
        });
    
        return <SortableItem index={this.props.index} item={this.props.item} />;
    }
}

export default withStyles(styles)(ItemTaskProject);
