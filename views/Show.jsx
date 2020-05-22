const React = require('react');

const Layout = require('./components/Layout.jsx');


class Show extends React.Component{
    render(){
        const {note} = this.props;
        return(
            <Layout>
                <body>
                    <div>
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                    </div>
                    <a href="/"><button>Back</button></a>
                </body>
            </Layout>
        )
    }
}





module.exports = Show;