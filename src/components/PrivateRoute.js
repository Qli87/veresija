import React from 'react'
import { Route, Redirect } from 'react-router-dom';


export default class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: true
        }
    }

    render() {
        console.log('props in private: ',this.props)
        let Component = this.props.component;
        
        return (
            <Route path={this.props.path}
                render={(props) => {
                    return this.state.isLogged ? (
                        <Component {...props} />
                    ) : (
                    <Redirect 
                        to={{
                            pathname:'/login'
                            // state: {from: props.location}
                        }}
                      />
                    )
                }}
            />
        );
    }
}