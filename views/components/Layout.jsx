const React = require('react');



class Layout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <title>This App</title>
                    <link rel="stylesheet" href="/css/styles.css"/>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}



module.exports = Layout;