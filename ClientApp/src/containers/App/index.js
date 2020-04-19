import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './../../commons/Theme/index';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import routes from './../../routes'; 
class App extends Component {
    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <Switch>
                        {this.showRouter(routes)}
                    </Switch>
                </ThemeProvider>
            </Router>
        ) 
    }

    showRouter = (routes)=>{
        var result = null;
            if( routes.length > 0){
                result = routes.map((value,index)=>{
                    return (
                        <Route
                            key = {index}
                            path= {value.path}
                            exact= {value.exact}
                            component ={value.main}
                        />
                    )
                })
            }
        return result;
    }
}
export default App