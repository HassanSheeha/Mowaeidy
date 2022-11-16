
const Joi=require('joi');

const singUpValidation={

body:Joi.object().required().keys({

firstName:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,18}$')).required(),
lastName:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,18}$')).required(),
email:Joi.string().email().required(),
password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
cpassword:Joi.string().valid(Joi.ref("password")).required(),
city:Joi.string().required(),
phone:Joi.string().required(),
organizer:Joi.boolean().required(),
role:Joi.string(),


})

}
const singInValidation={

body:Joi.object().required().keys({

email:Joi.string().email().required(),
password:Joi.string().required(),
status:Joi.string(),

})
}

module.exports = {singUpValidation,singInValidation}