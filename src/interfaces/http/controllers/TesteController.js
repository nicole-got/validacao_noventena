const API = ({
    allCacheOperation,
    saveCacheOperation,
    getCacheOperation
}) => ({
    all: async (req, res) => {
        const resp = await allCacheOperation.execute();
        res.send({ status: 200, data: resp});
    },
    save: async (req, res) => {
        const resp = await saveCacheOperation.execute(req.body);
        res.send({ status: 200, data: resp});
    },
    get: async (req, res) => {
        const resp = await getCacheOperation.execute(req.body);
        res.send({ status: 200, data: resp});
    },
});

module.exports = API;