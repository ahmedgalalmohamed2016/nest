module.exports = function (req, res, next) {
    //   if (!req.isSocket)
    //    return res.movo(401, "Please , Refresh Your Page.");

    if (req.body) {
        try {
            req.reqData = JSON.parse(JSON.stringify(req.body, function (a, b) {
                return typeof b === "string" ? b.toLowerCase() : b
            }));
            return next()
        } catch (err) {
            return res.movo(301, "Please Login Again");
        }
    } else {
        return res.movo(301, "Please Login Again");
    }



}