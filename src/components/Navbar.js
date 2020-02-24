import React from 'react'
import {Button} from 'react-bootstrap'

class Navbar extends React.Component {
    render() {
        var handler = this.props.handler;
        return (
            <div>
                <Button onClick={() => handler('category','shoes')}>
                    Shoes
                </Button>
                <Button onClick={() => handler('category','shirts')}>
                    Shirts
                </Button>
                <Button onClick={() => handler('main')}>
                    Go to main
                </Button>
            </div>
        )
    }
}
export default Navbar