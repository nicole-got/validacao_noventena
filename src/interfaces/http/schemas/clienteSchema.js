module.exports = ({ joi, createError }) => ({
    validate: (dataToValidate) => {
        const schema = joi.object().keys({
            cpf: joi.string().required().max(14)
        });

        const { error } = joi.validate(dataToValidate, schema);
        if(error) {
            throw createError(400, error, null);
        }
    }
});