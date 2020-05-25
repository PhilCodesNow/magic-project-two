const React = require('react');
const Layout = require('./components/Layout.jsx');



class Index extends React.Component{
    render(){
        const {notes} = this.props
        return(
            <Layout>
                <body className="viewsIndex">
                    <h1 className="page-header">My Notes</h1>
                    <div className="d-flex justify-content-center">
                    <a href="/new"><button className="btn btn-success m-3">New Note</button></a>
                    <a href="/user/new"><button className="btn btn-secondary m-3">Create Account</button></a>
                    <a href="/sessions/newSession"><button className="btn btn-primary m-3">Log In</button></a>
                    </div>
                    
                    <div className="list-group w-50">
                    {
                        notes.map((note, index) =>{
                            return(
                            <li className="list-group-item">
                                <a href={`/${note._id}`}><h2>{note.title}</h2></a>
                                <p>{note.body}</p>
                                <a href={`/${note._id}/edit`}></a>
                            </li>
                            )
                        })
                    }    
                    </div>
                

                </body>
            </Layout>
        )
    }
}





module.exports = Index;