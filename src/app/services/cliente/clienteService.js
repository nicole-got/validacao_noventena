module.exports = () => ({
    formataCpf: async (cpf) => {
        let stringCpf = cpf.toString();
        stringCpf = stringCpf.replace('.','')
        stringCpf = stringCpf.replace('.','')
        stringCpf = stringCpf.replace('-','')

        return stringCpf;
    }
});