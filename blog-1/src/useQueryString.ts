const http = require('http');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    try {
        const url = req.url;
        // queryString模块用于转换get请求参数
        req.query = queryString.parse(url.split('?')[1]);
        res.end(JSON.stringify(req.query));
    } catch (err) {
        console.log('err', err);
    }
});

console.log('server is running on port 8000');
server.listen(8000);
