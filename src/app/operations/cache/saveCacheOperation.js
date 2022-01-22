module.exports = ({ cacheService }) => ({
    execute: async (data) => {
        return await cacheService.create(data);
    },
});