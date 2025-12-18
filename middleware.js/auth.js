const auth = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized! Token tidak ditemukan"
        })
    }

    if (token !== "perpus123") {
        return res.status(403).json({
            message: "Forbidden! Token tidak valid"
        })
    }

    next()
}

module.exports = auth
