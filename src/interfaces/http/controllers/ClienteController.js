const API = ({
    validacaoNoventenaOperation,
    clienteSchema
}) => ({
    validaNoventena: async (req, res) => {
        clienteSchema.validate(req.body);
        const validacao = await validacaoNoventenaOperation.execute(req.body);
        res.send({ status: 200, data: validacao });
    },
});

module.exports = API;
