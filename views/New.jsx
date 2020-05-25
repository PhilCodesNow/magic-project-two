const React = require('react');
const Layout = require('./components/Layout.jsx');



class New extends React.Component{
    render(){
        return(
            <Layout>
                <div className="text-center">
                <h1>New Note</h1>
                    <div className="jumbotron w-50 m-auto">
                    <form action="/" method="POST">
                        <input className="form-group" type="text" name="title"/><br/>
                        <input className="form-group" type="textarea" name="body"/><br/>
                        <input className="form-group btn btn-success" type="submit" value="Create Note"/>
                    </form>
                    </div>
                
                
                <a href="/"><button className="btn btn-warning m-3">back</button></a>
                </div>
            </Layout>
        )
    }
}





module.exports = New;