module.exports = ({ cacheService }) => ({
    execute: async () => {
        return await cacheService.keys();
    },
});