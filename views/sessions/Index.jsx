const React = require('react')
const Layout = require('../components/Layout.jsx');


class userIndex extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Layout>
            <body>
                <h1>{user.username}</h1>
                <h1>this is users page (index)</h1>
                <div>
                
                
                
                </div>
                <a href={`/sessions/${user._id}/newNote`}><button>add note</button></a>
                {user.notes.map((note, index) =>{
                return(
                <div>
                    <p>{note}</p>
                    <form action={`/sessions/${user._id}/${index}/notes`} method="POST">
                        <input type="submit" value="delete"/>
                    </form>
                </div>
                )
                })}
                <a href="/"><button>Logout</button></a>
            </body>
            </Layout>
        )
    }
}



module.exports = userIndex;