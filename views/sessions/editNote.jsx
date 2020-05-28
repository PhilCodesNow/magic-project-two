const React = require('react');
const Layout = require('../components/Layout.jsx');



class editNote extends React.Component{
    render(){
        const {note, index} = this.props

        return(
            <Layout>
            <body className="text-center">

                <div className="jumbotron w-50 m-auto">
                    <p>this</p>
                    <p>{note.notes}</p>
                    <h2>Edit Note</h2>
                    <form action={`/sessions/${note._id}/${index}/edit?_method=PUT`} method="POST">
                        <textarea className="textAreaClass" name="notes" value={`${note.notes[index]}`}/><br/>
                        <input className="btn btn-success m-3" type="submit" value="Update Note"/>
                    </form>

                </div>
                <a href={`/sessions/${note._id}/${index}/show`}><button className="btn btn-warning m-3">Cancel</button></a>
            </body>
            </Layout>
        )
    }
}


module.exports = editNote;