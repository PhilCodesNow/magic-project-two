const React = require('react');
const Layout = require('../components/Layout.jsx');



class newNote extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Layout>
            <body className="text-center">
                <div>
                    <h2>{user.username}, add a new note</h2>
                </div>
                <div className="jumbotron w-50 m-auto">
                    <form action={`/sessions/${user._id}/notes`} method="POST">
                        <textarea className="form-group textAreaClass" name="notes"/><br/>
                        <input className="btn btn-success m-3" type="submit" value="Post Note"/>
                    </form>
                </div>
                <a href={`/sessions/${user._id}/notes`}><button className="btn btn-warning m-3">back</button></a>
            </body>
            </Layout>
        )
    }
}





module.exports = newNote;