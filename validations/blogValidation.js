
import Joi from 'joi';

const blogValidationSChema = Joi.object ({

    title: Joi.string()
    .required()
    .label("title")
    .min(10)
    .max(500)
    .regex(/^[A-Za-z ]+$/).messages({
        "string.pattern.base": "The titles can not include numbers and special characters",
        "string.empty": "The title field can not be empty",
        "any.required":"The title field can not be empty",
        "string.min":"Title length should be atleast 10 characters long"
    }),
    image:Joi.array()
    .items(Joi.string()
    .uri()
    .required()
    ),

    description: Joi.string().required().label("description").messages({
      "string.empty": "The  description field can not be empty",
      "any.required":"Description field can not be empty!!!"
  }),


  

})

export default  blogValidationSChema;