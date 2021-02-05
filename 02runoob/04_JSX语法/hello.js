class Clock extends React.Component {
    render() {
        let VDOM = (
            <div>
                <h1>Hello React</h1>
                <h1>{this.props.date.toLocaleTimeString()}</h1>
            </div>
        )
        return VDOM
    }
}

function tick(target){
    ReactDOM.render(
        <Clock date={new Date()}/>,
        target
    )
}

