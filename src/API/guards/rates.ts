import Joi from "joi";

export const registRate = {
  body: Joi.object({
    baseCurrenciesId: Joi.string().uuid().required(),
    equivalentCurrenciesId: Joi.string().uuid().required(),
    value: Joi.number().required()
  })
}