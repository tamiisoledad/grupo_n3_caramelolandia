const getUrl = req => req.protocol+"://"+req.get("host")+req.originalUrl;
module.exports = {
    show: (req, res) => {
        let response = {
            meta: {
                link: getUrl(req)
            },
            data: req.session.cart
        }
        return res.status(200).json(response)
    }
}