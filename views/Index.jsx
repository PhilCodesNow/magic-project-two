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
                                    <p>{note.title}</p>
                                    <p>{note.body}</p>
                                </div>
                            )
                        })
                    }    
                    </div>
                
                    <a href="/new"><button>New</button></a>
                </body>
            </Layout>
        )
    }
}





module.exports = Index;