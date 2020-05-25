const React = require('react');

const Layout = require('./components/Layout.jsx');


class Edit extends React.Component{
    render(){
        const {note} = this.props;
        return(
            <Layout>
                <body className="viewsEdit text-center">
                    <h1>Edit</h1>
                    <div className="jumbotron w-50 m-auto p-3">
                        <form action={`/${note._id}/edit?_method=PUT`} method="POST">
                            <input className="form-group" type="text" name="title" value={note.title}/><br/>
                            <input className="form-group" type="textarea" name="body" value={note.body}/><br/>
                            <input className="btn btn-primary m-3" type="submit" value="Edit Note"/>
                        </form>
                    </div>

                    <div className="d-flex justify-content-center">
                        <a href={`/${note._id}`}><button className="btn btn-warning m-3">Cancel</button></a>
                        <form action={`/${note._id}?_method=DELETE`} method="POST">
                            <input className="btn btn-danger m-3" type="submit" value="Delete"/>
                        </form>
                    </div>
                </body>
            </Layout>
        )
    }
}





module.exports = Edit;