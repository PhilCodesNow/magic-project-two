const React = require('react')
const Layout = require('../components/Layout.jsx');


class userShow extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Layout>
            <body>
                <h1>{user.username}</h1>
                <h1>this is users page</h1>
                <div>

                </div>
                <a href={`sessions/${user._id}/new`}></a>
            </body>
            </Layout>
        )
    }
}



module.exports = userShow;