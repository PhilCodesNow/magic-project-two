const React = require('react');

const Layout = require('./components/Layout.jsx');


class Show extends React.Component{
    render(){
        const {note} = this.props;
        return(
            <Layout>
                <body className="viewsShow text-center">
                    <div className="list-group-item list-group-item-warning w-50 m-auto">
                        <h2 className="m-3 fonts">{note.title}</h2>
                        <p className="fonts">{note.body}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                    <a href={`/${note._id}/edit`}><button className="btn btn-warning m-3">Edit</button></a><br/>
                    <a href="/"><button className="btn btn-success m-3">Back</button></a>
                    </div>
                </body>
            </Layout>
        )
    }
}





module.exports = Show;