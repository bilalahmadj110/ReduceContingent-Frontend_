const K = {
	Network: {
		URL: {
			Base: process.env.REACT_APP_BASE_URL,
			BaseAPI: process.env.REACT_APP_BASE_API_URL,
			DomainName: process.env.REACT_APP_CLIENT_DOMAIN_NAME,
			Timeout: process.env.REACT_APP_TIMEOUT,
			Protocol: process.env.REACT_APP_PROTOCOL,
			Client: {
				BaseHost: process.env.REACT_APP_CLIENT_BASE_HOST,
				BasePort: process.env.REACT_APP_CLIENT_BASE_PORT
			},
			Auth: {
				Login: '/auth/sign-in',
				SignUp: '/auth/signup',
				ResendOtp: '/auth/resend-otp',
				ConfirmSignUp: '/auth/confirm-signup',
				SetPassword: '/auth/set-password',
				ForgotPassword: '/auth/forget-password'
			},
			Packages: '/package-sizes',
			LabelSizes: '/shipping-label-sizes'
		},
		Method: {
			GET: 'GET',
			PUT: 'PUT',
			POST: 'POST',
			PATCH: 'PATCH',
			DELETE: 'DELETE'
		},
		Header: {
			ContentType: 'Content-Type',
			ApplicationJson: 'application/json',
			Default: (token = '') => ({
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Bearer ' + token
			}),
			Authorization: (token = '') => ({
				Authorization: 'Bearer ' + token
			}),
			Type: {
				Json: 'json',
				File: 'file'
			}
		},
		StatusCode: {
			NotModified: 304,
			Unauthorized: 401,
			Forbidden: 403,
			NotFound: 404,
			InternalServerError: 500
		}
	},
	Cookie: {
		Key: {
			User: 'user',
			EncryptionKey: 'zip_ship_logged_in_user'
		}
	},
	Query: {
		Keys: {
			Packages: 'packages',
			LabelSizes: 'labelSizes'
		}
	},
	LabelFormats: ['PNG', 'PDF'],
	Roles: {
		Admin: 'Admin',
		User: 'User'
	}
}

export default K
