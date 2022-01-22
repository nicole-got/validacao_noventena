module.exports = ({ cache }) => ({
    create: async (data) => {
        return cache.put(data.chave, data.valor);
    },
    get: async (data) => {
        return cache.get(data.chave)
    },
    keys: async () => {
        return cache.keys()
    },
    delete: async (data) => {
        return cache.del(data.chave)
    },
});