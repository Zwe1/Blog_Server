const userRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    if (method === 'POST') {
        switch (path) {
            case '/user/login':
                return {
                    msg: 'this is a method to login',
                };
            default:
                return {};
        }
    }
};

module.exports = userRouter;
