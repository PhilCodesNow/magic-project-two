const React = require('react');
const Layout = require('./components/Layout.jsx');



class Index extends React.Component{
    render(){
        const {notes} = this.props
        return(
            <Layout>
                <body>
                    <h1>My Notes</h1>
                    <div>
                    {
                        notes.map((note, index) =>{
                            return(
                                <div>
                                    <a href={`/${note._id}`}><p>{note.title}</p></a>
                                    <p>{note.body}</p>
                                    <a href={`/${note._id}/edit`}></a>
                                </div>
                            )
                        })
                    }    
                    </div>
                
                    <a href="/new"><button>New Note</button></a><br/>
                    <a href="/user/new"><button>Create Account</button></a><br/>
                    <a href="/sessions/new"><button>Log In</button></a>
                </body>
            </Layout>
        )
    }
}





module.exports = Index;