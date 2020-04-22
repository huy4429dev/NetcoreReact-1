import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';

class ItemUser extends Component {

    deleteUser = (id)=>{
        if(window.confirm('Bạn có chắc muốn xóa')){
            this.props.handleDeleteUser(id);
        }
    }
    showFormEdit = (item)=>{
        this.props.showFormEdit();
        this.props.getValueEditUser(item);
    }
    render() {
        const {classes,item,index} =this.props;
        return (
            <React.Fragment>
                <TableRow >
                    <TableCell className={classes.colorTitle} align="right">{index+1} </TableCell>
                    <TableCell className={classes.colorTitle} align="right">{item.fullName} </TableCell>
                    <TableCell className={classes.colorTitle} align="right" ><Avatar className={classes.avata} alt="Remy Sharp" src={`https://localhost:5001/${item.avatar}`}/></TableCell>
                    <TableCell className={classes.colorTitle} align="right">{item.email}</TableCell>
                    <TableCell className={classes.colorTitle} align="right">
                            <Button className={classes.btnWaring} onClick={()=> this.showFormEdit(item)} ><EditIcon/></Button>
                            <Button className={classes.btnDanger} onClick={()=>this.deleteUser(item.id)}><DeleteIcon/></Button>
                    </TableCell>
                </TableRow>                
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(ItemUser);