const React = require('react');
const Layout = require('../components/Layout.jsx');


class NewUser extends React.Component {
    render() {
        return(
            <Layout>
            <div>
                <h1>New User</h1>
                <form action="/user/" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="Create Account"/>
                </form>
                <a href="/"><button>Cancel</button></a>
            </div>
            </Layout>
        )
    }
}


module.exports = NewUser;