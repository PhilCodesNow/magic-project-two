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


                    <button type="button" class="btn btn-lg btn-danger mb-3" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>


                    <div className="list-group w-50 m-auto">
                    {
                        notes.map((note, index) =>{
                            return(
                                <a className="list-group-item list-group-item-action list-group-item-warning" href={`/${note._id}`}>
                                <h2>{note.title}</h2>
                                {note.body}
                                </a>
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