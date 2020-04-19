import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class ListsUser extends Component {
    render() {
        const {classes} =this.props;
        return (
            <React.Fragment>
                <Card >
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Lists user
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small"  aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell className={classes.colorTitle} align="right">Stt</TableCell>
                                        <TableCell className={classes.colorTitle} align="right">fullName</TableCell>
                                        <TableCell className={classes.colorTitle} align="right">avatar</TableCell>
                                        <TableCell className={classes.colorTitle} align="right">email</TableCell>
                                        <TableCell className={classes.colorTitle} align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.children}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ListsUser);