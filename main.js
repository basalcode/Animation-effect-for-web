var httpModule = require('http');
var fsModule = require('fs');
var urlModule = require('url');

var app = httpModule.createServer(function(request, response) {
    var url = request.url;
    var pathName = urlModule.parse(url, true).pathname;
    var queryString = urlModule.parse(url, true).query;
    
    if (pathName === '/') { 
        if (queryString.id === undefined) { /* Index page */
            var htmlCode = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Animation Effect for Web</title>
                <link rel="stylesheet" href="./src/css/common.css">
                <link rel="stylesheet" href="./src/css/index.css">
            </head>
            <body>
                <header class="top">
                    <div class="title">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMy4yMjIgMTguOTE3YzUuNjY2LTUuOTA1LS42MjktMTAuODI4LTUuMDExLTcuNzA2bDEuNzg5IDEuNzg5aC02di02bDEuODMyIDEuODMyYzcuODQ2LTYuMDcgMTYuMjEyIDQuNDc5IDcuMzkgMTAuMDg1eiIvPjwvc3ZnPg=="/>
                        <header><a href="./index.html">Animation effect for web</a></header>
                    </div>
                    <nav class="main-nav"> 
                        <a class="main-nav-item" href="./index.html" ><b>HOME</b></a>
                        <a class="main-nav-item" href="#"><b>BOOK_MARKS</b></a>
                    </nav>
                </header>
                <div class="middle">
                    <aside class="side-bar">
                        <nav class="nav-group">
                            <header class="group-name">Font-Effect</header>
                            <a class="nav-itme" href="effectName.html">effectName</a>
                        </nav>
                    </aside>
                    <main class="main">
                        <h1>About This Page</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda laborum pariatur, molestias nisi accusamus sed doloribus repellat maxime quam veritatis minima quas. Adipisci corporis nam eaque eligendi quam commodi quos.
                        </p>
                    </main>
                </div>
                <footer class="bottom">
                    Footer
                </footer>
                
                <script src="./src/js/common.js"></script>
                <script src="./src/js/index.js"></script>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(htmlCode);
        } else { /* Other pages */
            var htmlCode = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Animation Effect for Web</title>
                <link rel="stylesheet" href="./src/css/common.css">
                <link rel="stylesheet" href="./src/css/index.css">
            </head>
            <body>
                <header class="top">
                    <div class="title">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMy4yMjIgMTguOTE3YzUuNjY2LTUuOTA1LS42MjktMTAuODI4LTUuMDExLTcuNzA2bDEuNzg5IDEuNzg5aC02di02bDEuODMyIDEuODMyYzcuODQ2LTYuMDcgMTYuMjEyIDQuNDc5IDcuMzkgMTAuMDg1eiIvPjwvc3ZnPg=="/>
                        <header><a href="./index.html">Animation effect for web</a></header>
                    </div>
                    <nav class="main-nav"> 
                        <a class="main-nav-item" href="./index.html" ><b>HOME</b></a>
                        <a class="main-nav-item" href="#"><b>BOOK_MARKS</b></a>
                    </nav>
                </header>
                <div class="middle">
                    <aside class="side-bar">
                        <nav class="nav-group">
                            <header class="group-name">Font-Effect</header>
                            <a class="nav-itme" href="effectName.html">effectName</a>
                        </nav>
                    </aside>
                    <main class="main">
                        <h1>Effect</h1>
                        <p>
                            This is an example of how effect works.
                        </p>
                        <h1>Detail</h1>
                        <p>
                            About this effect...
                        </p>
                        <h1>Codes</h1>
                        <p>
                            Space for JavaScript and CSS codes.
                        </p>
                    </main>
                </div>
                <footer class="bottom">
                    Footer
                </footer>
                
                <script src="./src/js/common.js"></script>
                <script src="./src/js/index.js"></script>
            </body>
            </html>
            `
            response.writeHead(200);
            response.end(htmlCode);
        }
    } else { /* 404 Not found */
        response.writeHead(404);
        response.end('404 Not Found');
    }
});
app.listen(80);