const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}

	controller.get(filters)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}
	controller.getById(id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.get('/:resource/:userId/:trainerId', (req, res) => {
	const resource = req.params.resource
	const userId = req.params.userId
	const trainerId = req.params.trainerId

	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}
	controller.getMessages(userId, trainerId)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}
	if(resource == 'message'){
		controller.post(req.body.userId, req.body.trainerId, req.body.content)
			.then(data => {
				res.json({
					confirmation: 'success',
					data: data
				})
			})
			.catch(err => {
				res.json({
					confirmation: 'fail',
					message: err.message
				})
			})
	}else{
		controller.post(req.body)
			.then(data => {
				res.json({
					confirmation: 'success',
					data: data
				})
			})
			.catch(err => {
				res.json({
					confirmation: 'fail',
					message: err.message
				})
			})
	}

})

router.post('/:resource/:trainerId', (req, res) => {
	const resource = req.params.resource
	const trainerId = req.params.trainerId
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}

	controller.postMessage(req.body.userId, trainerId, req.body.content)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.post('/:resource/:userId', (req, res) => {
	const resource = req.params.resource
	const trainerId = req.params.trainerId
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}

	controller.postMessage(req.body.trainerId, userId, req.body.content)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}

	controller.put(req.params.id, req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}

	controller.delete(req.params.id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

module.exports = router