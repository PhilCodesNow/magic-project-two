const React = require('react');
const Layout = require('./components/Layout.jsx');



class New extends React.Component{
    render(){
        return(
            <Layout>
                <h1>New</h1>
                <a href="/"><button>back</button></a>
            </Layout>
        )
    }
}





module.exports = New;