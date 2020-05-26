const React = require('react');
const Layout = require('../components/Layout.jsx');



class editNote extends React.Component{
    render(){
        const {note} = this.props

        return(
            <Layout>
            <body className="text-center">

                <div>
                    <h2>Edit Note</h2>
                    <p>this</p>
                    <p>{note.notes}</p>
                </div>
            </body>
            </Layout>
        )
    }
}


module.exports = editNote;