const blogRouter = require('./router/blog');
const userRouter = require('./router/user');

const serverHandler = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const resData = blogRouter(req, res);
    if (!resData) {
        resData = userRouter(req, res);
    }

    res.end(JSON.stringify(blogData));
};

module.exports = serverHandler;
