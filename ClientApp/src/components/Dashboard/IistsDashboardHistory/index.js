import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ItemDashboardHistory from './../ItemDashboardHistory';
import {withStyles} from '@material-ui/styles';
import styles from './style';

class ListDashboardHistory extends Component {
    render() {
        return (
            <React.Fragment>
                <Box component="div">
                    <Grid container spacing={3}>
                        <ItemDashboardHistory/>
                    </Grid>
                </Box>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ListDashboardHistory);
