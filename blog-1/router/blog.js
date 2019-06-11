const blogRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    if (method === 'GET') {
        switch (path) {
            case '/blog/list': 
                return {
                    msg: 'this is a method to get blog list'
                };
            case '/blog/detail':
                return {
                    msg: 'this is a method to get blog detail'
                };
            default: 
                return;
        }
    } else if (method === 'POST') {
        switch (path) {
            case '/blog/update': 
                return {
                    msg: 'this is a method to update blog list'
                };
            case '/blog/del':
                return {
                    msg: 'this is a method to delete blog detail'
                };
            default: 
                return;
        }
    }
}

module.exports = blogRouter;
