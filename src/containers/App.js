import React from 'react'
import Cardlist from '../components/Cardlist'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            search: ""
        }
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) })
    }
    onSearch = (event) => {
        this.setState({ search: event.target.value })

    }
    render() {
        const { robots, search } = this.state;
        const filterrob = robots.filter(robots => {
            return robots.name.toLowerCase().includes(search.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Search searchchange={this.onSearch} />
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filterrob} />
                    </ErrorBoundary>
                </Scroll>
            </div>
    }
}
export default App
