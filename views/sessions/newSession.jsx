const React = require('react');
const Layout = require('../components/Layout.jsx');


class LoginUser extends React.Component {
    render(){
        return(
            <Layout>
            <body className="text-center">
                <h1>User Login</h1>
                <div className="jumbotron w-50 m-auto p-2">
                <form action="/sessions/" method="POST">
                    username: <input className="form-group" type="text" name="username"/><br/>
                    password: <input className="form-group" type="password" name="password"/><br/>
                    <input className="btn btn-sucess" type="submit" value="Login"/>
                </form>
                </div>
                <a href="/"><button className="btn btn-warning m-3">Cancel</button></a>
            </body>
            </Layout>
        )
    }
}



module.exports = LoginUser;