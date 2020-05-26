const React = require('react')
const Layout = require('../components/Layout.jsx');


class userShow extends React.Component{
    render(){
        const {user, index} = this.props
        return(
            <Layout>
            <body className="text-center w-50 m-auto fonts">
                <div className="jumbotron mt-4 p-5">
                <h1>{user.notes[index]}</h1>

                </div>
                <a href={`/sessions/${user._id}/notes`}><button className="btn btn-success m-3">Back</button></a>
                <a href={`/sessions/${user._id}/${index}/edit`}><button className="btn btn-warning">Edit</button></a>
                <form action={`/sessions/${user._id}/${index}/delete`} method="POST">
                    <input className="btn btn-danger" type="submit" value="delete"/>
                </form>
            </body>
            </Layout>
        )
    }
}



module.exports = userShow;