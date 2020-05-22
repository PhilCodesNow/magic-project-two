const React = require('react');
const Layout = require('./components/Layout.jsx');



class New extends React.Component{
    render(){
        return(
            <Layout>
                <div>
                    <form action="/" method="POST">
                        <input type="text" name="title"/><br/>
                        <input type="textarea" name="body"/><br/>
                        <input type="submit" value="Create Note"/>
                    </form>
                </div>
                <h1>New</h1>
                <a href="/"><button>back</button></a>
            </Layout>
        )
    }
}





module.exports = New;