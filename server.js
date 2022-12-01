const http = require('http')
const PORT = 5000
const sever = http.createServer((req,res)=>{
    if(req.url === '/'){
        //set response header
        res.writeHead(200,{'Content-type':'text/html'})
        //set response content
        res.write('<h1>Hello,Node.js!</h1>')
        res.end()
        
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>About page!</h1>')
        res.end()
    }else if(req.url === '/stdent'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>About page!</h1>')
        res.end()
    }else
    res.end('Invalis Request')
})
sever.listen(PORT,()=>{
    console.log('sever Running http://localhost:${PORT}')
})

