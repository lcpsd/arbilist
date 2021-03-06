const models = require('../models/index')
const user_model = models['User']

//userServices

const userValidator = require('../validators/generic')
const create_service = require('../services/user/create')
const update_service = require('../services/user/update')
const readAll_service = require('../services/user/readUsers')
const delete_service = require('../services/user/delete')
const recoverPassword_service = require('../services/user/recoverPassword')
const confirmPassRecover_service = require('../services/user/confirmNewPassword')

class User{
    
	async create(req, res){
		let result = await create_service(req, user_model, userValidator)
		return res.json(result)
	}

	async readAll(req, res){
		let result = await readAll_service(user_model)
		return res.json(result)
	}

	async updateEmail(req, res){
		let result = await update_service.email(req, user_model)
		return res.json(result)
	}

	async updatePass(req, res){
		let result = await update_service.passwd(req, user_model)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, user_model)
		return res.json(result)
	}
	
	async passRecover(req, res){
		let result = await recoverPassword_service(req, user_model)
		return res.json(result)
	}

	async confirmPassRecover(req, res){
		let result = await confirmPassRecover_service(req, user_model)
		return res.json(result)
	}

	async sessionData(req, res){
		return res.json(req.session)
	}


}

module.exports = new User()