const React = require('react')

class userIndex extends React.Component{
    render(){
        const {user} = this.props
        return(
            <body>
                <h1>{user.username}</h1>
                <h1>this is users page</h1>
                <div>

                </div>
                <a href={`sessions/${user._id}/new`}><button>add note</button></a>
            </body>
        )
    }
}



module.exports = userIndex;