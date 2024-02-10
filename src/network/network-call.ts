import axios from 'axios'
import K from '../utilities/constants'

export default class NetworkCall {
	static async fetch(request, useLoading = true) {
		axios.request({
			method: 'GET',
			baseURL
		})

		try {
			const response = await NetworkCall.axios.request(request)
			console.log('NetworkCall Data: ', response.data)
			return response.data
		} catch (err) {
			let error = err.response
			console.log('NetworkCall Error: ', error)
			if (error === undefined) {
				message.error('Cannot connect to server')
				return Promise.reject({
					error: error
				})
			} else if (error.status === K.Network.StatusCode.Unauthorized) {
				User.logout('User unauthorized')
			} else message.error(error.data.message)

			if ('errors' in error.data) error.data.errors = camelCaseKeys(error.data.errors)
			return Promise.reject({
				error: error,
				message: error.data.message,
				statusCode: error.status
			})
		}
	}
}

NetworkCall.__prototype__.axios = axios.create({
	baseURL: K.Network.URL.BaseAPI,
	timeout: K.Network.Timeout,
	headers: {}
})
