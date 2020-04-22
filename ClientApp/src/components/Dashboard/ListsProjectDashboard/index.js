import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/styles';
import styles from './style';

class ListsProjectDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Box component="div">
                    <Grid container spacing={3}>
                        {this.props.children}
                    </Grid>
                </Box>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ListsProjectDashboard);