const React = require('react');



class newNote extends React.Component{
    render(){
        const {user} = this.props
        return(
            <body>
                <div>
                    <p>{user.username}, add a new note</p>
                </div>
                <div>
                    <form action={`/sessions/${user._id}/notes`} method="POST">
                        <input type="text" name="notes"/>
                        <input type="submit" value="Post Note"/>
                    </form>
                </div>
                <a href={`/sessions/${user._id}/notes`}><button>back</button></a>
            </body>
        )
    }
}





module.exports = newNote;