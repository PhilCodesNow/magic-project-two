const React = require('react');



class Layout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <title>This App</title>
                    {/* Bootstrap */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    {/* Popper */}
                    <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
                    {/* Stylesheet */}
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