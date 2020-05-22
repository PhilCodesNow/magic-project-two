const React = require('react');

const Layout = require('./components/Layout.jsx');


class Edit extends React.Component{
    render(){
        const {note} = this.props;
        return(
            <Layout>
                <body>
                    <h1>Edit</h1>
                    <div>
                        <form action={`/${note._id}/edit?_method=PUT`} method="POST">
                            <input type="text" name="title" value={note.title}/><br/>
                            <input type="textarea" name="body" value={note.body}/><br/>
                            <input type="submit" value="Edit Note"/>
                        </form>
                    </div>
                    <a href="/"><button>Cancel</button></a>
                </body>
            </Layout>
        )
    }
}





module.exports = Edit;