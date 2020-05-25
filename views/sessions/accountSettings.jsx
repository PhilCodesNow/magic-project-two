const React = require('react');
const Layout = require('../components/Layout.jsx');

class accountSettings extends React.Component{
    render(){
        const {user} = this.props
        return(
            <Layout>
                <body className="text-center">
                    <h1>{user.username}'s Account Settings</h1>
                    <div>
                        <a href={`/sessions/${user._id}/notes`}><button className="btn btn-primary m-3">Save Settings</button></a>
                    </div>
                    <div>
                        <form action={`/sessions/${user._id}/delete?_method=DELETE`} method="POST">
                            <input className="btn btn-danger m-3" type="submit" value="Delete Account"/>
                        </form>
                    </div>
                </body>
            </Layout>
        )
    }
}




module.exports = accountSettings;