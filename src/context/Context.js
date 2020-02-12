/* eslint-disable react/prop-types */
import React, {
    createContext,
    Component
} from 'react';

<<<<<<< HEAD
export const Hooks = createContext({});
=======
export const Hooks = createContext();
>>>>>>> 07732830ec30871d3c4a0a917d852e259fa74ae0

class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hi: "hello"
        };
    }

    render() {
        return ( 
            <Hooks.Provider value = {{...this.state}} > 
                {this.props.children}
            </Hooks.Provider>
        );
    }
}
export default Context;