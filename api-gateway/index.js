const gateway = require("fast-gateway");

const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/socket",
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: "/api",
            target: "http://localhost:8082/",
            hooks: {}
        }
    ]
});
server.get('/', (req,res,next)=>{
    res.send('working')
})
server.start(port).then(server => {
    console.log("Gateway is running " + port);
})