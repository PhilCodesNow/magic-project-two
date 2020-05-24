const React = require('react')

class userShow extends React.Component{
    render(){
        const {user} = this.props
        return(
            <body>
                <h1>{user.username}</h1>
                <h1>this is users page</h1>
                <div>

                </div>
                <a href={`sessions/${user._id}/new`}></a>
            </body>
        )
    }
}



module.exports = userShow;