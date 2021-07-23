import Joi from 'joi';

export default Joi.object({
  pair: Joi.string(),
  interval: Joi.number().integer().positive().strict(),
  threshold: Joi.number().positive().strict(),
});
