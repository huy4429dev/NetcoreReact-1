import React, {Component} from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ItemTaskProject from './../ItemTaskProject/index';
import { withStyles } from '@material-ui/core';
import styles from './style';
import Box from '@material-ui/core/Box';

class ListTaskProject extends Component {
    render() {
        const {classes} = this.props;
        const SortableList = SortableContainer(({items}) => {
            let list_items = items.map((item, index) => {
            return <ItemTaskProject 
                        item={item} 
                        index={index} 
                        key={index} />;
            });
            return (
            <Box display="flex" className={classes.scoll}>{list_items}</Box>
            );
        });
    
        return (
            <SortableList items={this.props.items} onSortEnd={this.props.onSortEnd} axis="x"/>
        );
    }
}

export default withStyles(styles)(ListTaskProject);