import K from "utilities/constants";
import Cookies from "js-cookie";
import User from "models/user";

const { Network } = K;
export default class Request {
  constructor(
    relativeURL,
    method = Network.Method.GET,
    body = null,
    defaultHeaderType = Network.Header.Type.Json,
    headers = {},
    isTenant = true
  ) {
    const token = User.getToken();
    const domainPrefix = Cookies.get(K.Cookie.Key.Tenant);
    headers = {
      ...(defaultHeaderType === Network.Header.Type.Json
        ? Network.Header.Default(token)
        : Network.Header.Authorization(token)),
      ...headers,
    };
    this.url = isTenant
      ? Network.URL.TenantURL(domainPrefix) + relativeURL
      : Network.URL.BaseAPI + relativeURL;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }

  // User calls.
  static loginUser(email, password) {
    const body = {
      email,
      password,
    };
    return new Request(
      Network.URL.Auth.Login,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static registerUser(password, values) {
    const body = {
      password,
      ...values,
    };
    return new Request(
      Network.URL.Auth.SignUp,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static forgotPassword(email) {
    const body = {
      email,
    };
    return new Request(
      Network.URL.Auth.ForgotPassword,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static resetPassword(password, token) {
    const body = {
      password,
    };
    return new Request(
      Network.URL.Auth.ResetPassword + `/${token}`,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static verifyEmail(otp) {
    const body = { otp };
    return new Request(
      Network.URL.Auth.VerifyEmail,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static resendOtp() {
    return new Request(
      Network.URL.Auth.ResendOtp,
      Network.Method.GET,
      null,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  // Packages calls.
  static getAllPackages() {
    return new Request(
      Network.URL.Packages,
      Network.Method.GET,
      null,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static addNewPackage(body) {
    return new Request(
      Network.URL.Packages,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static editPackage(id, body) {
    return new Request(
      Network.URL.Packages + `/${id}`,
      Network.Method.PUT,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static deletePackage(id) {
    return new Request(
      Network.URL.Packages + `/${id}`,
      Network.Method.DELETE,
      null,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  // Label Sizes calls.
  static getAllLabelSizes() {
    return new Request(
      Network.URL.LabelSizes,
      Network.Method.GET,
      null,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static addNewLabelSize(body) {
    return new Request(
      Network.URL.LabelSizes,
      Network.Method.POST,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static editLabelSize(id, body) {
    return new Request(
      Network.URL.LabelSizes + `/${id}`,
      Network.Method.PUT,
      body,
      Network.Header.Type.Json,
      {},
      false
    );
  }

  static deleteLabelSize(id) {
    return new Request(
      Network.URL.LabelSizes + `/${id}`,
      Network.Method.DELETE,
      null,
      Network.Header.Type.Json,
      {},
      false
    );
  }
}
