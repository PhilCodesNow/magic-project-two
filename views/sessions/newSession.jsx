const React = require('react');
const Layout = require('../components/Layout.jsx');


class LoginUser extends React.Component {
    render(){
        return(
            <Layout>
            <body>
                <h1>User Login</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Login"/>
                </form>
                <a href="/"><button>Cancel</button></a>
            </body>
            </Layout>
        )
    }
}



module.exports = LoginUser;