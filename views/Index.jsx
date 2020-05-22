const React = require('react');
const Layout = require('./components/Layout.jsx');



class Index extends React.Component{
    render(){
        return(
            <Layout>
                <h1>My Notes</h1>
                <a href="/new"><button>New</button></a>
            </Layout>
        )
    }
}





module.exports = Index;