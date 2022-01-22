module.exports = ({ 
    saveCacheOperation, 
    deleteCacheOperation, 
    getCacheOperation, 
    clienteService,
    moment 
}) => ({
    execute: async (data) => {
        let clienteDeveSerImpactado = false;

        const chave = await clienteService.formataCpf(data.cpf);
        const valor = moment().format('DD/MM/yyyy');
        const objectCache = { chave, valor };

        const dataClienteJaImpactado = await getCacheOperation.execute(objectCache)
        if(dataClienteJaImpactado)
        {
            let dataPesquisa = moment(dataClienteJaImpactado, "DD/MM/yyyy")
            let dataAddNoveMeses =  dataPesquisa.add(9,'M');
            let dataHoje = moment(objectCache.valor, "DD/MM/yyyy");

            const clientePassouNoventena = dataHoje.isAfter(dataAddNoveMeses) || dataHoje.isSame(dataAddNoveMeses)
            if(clientePassouNoventena){
                await deleteCacheOperation.execute(objectCache);
                await saveCacheOperation.execute(objectCache);
                clienteDeveSerImpactado = true
            }
        }
        else
        {
           await saveCacheOperation.execute(objectCache);
           clienteDeveSerImpactado = true;
        }

        return {clienteDeveSerImpactado};
    },
});