const React = require('react')
const Layout = require('../components/Layout.jsx');


class userIndex extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Layout>
            <body className="text-center">
                <h1>{user.username}'s Notes</h1>
                <div className="d-flex justify-content-center">
                <a href={`/sessions/${user._id}/newNote`}><button className="btn btn-success m-3">add note</button></a>
                <a href="/"><button className="btn btn-secondary m-3">Logout</button></a>
                </div>

                <div className="jumbotron w-50 m-auto
                p-0 list-group">
                {user.notes.map((note, index) =>{
                return(
                <a className="list-group-item list-group-item-action list-group-item-warning fonts" href="#">
                    <p>{note}</p>
                    <form action={`/sessions/${user._id}/${index}/notes`} method="POST">
                        <input className="btn btn-danger" type="submit" value="delete"/>
                    </form>
                </a>
                )
                })}
                </div>
                
            </body>
            </Layout>
        )
    }
}



module.exports = userIndex;