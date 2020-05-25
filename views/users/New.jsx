const React = require('react');
const Layout = require('../components/Layout.jsx');


class NewUser extends React.Component {
    render() {
        return(
            <Layout>
            <div className="userNew text-center">
                <h1>New User</h1>
                <div className="jumbotron w-50 m-auto p-3">
                <form action="/user/" method="POST">
                    username: <input className="form-group" type="text" name="username"/><br/>
                    password: <input className="form-group" type="password" name="password"/><br/>
                    <input className="btn btn-success m-2" type="submit" value="Create Account"/>
                </form>
                </div>
                <a href="/"><button className="btn btn-warning m-3">Cancel</button></a>
            </div>
            </Layout>
        )
    }
}


module.exports = NewUser;