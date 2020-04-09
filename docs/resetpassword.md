---
hide_title: true,
sidebar_label: /resetpassword
---

# Description
*Allow the user to reset his password there are many cases for this route, we'll see below each one.*

## Methods
This route accept:

* **PUT**
* **GET**

## GET
*The GET method for this route is called when the user ask for reset his password while he's not connected after submitting the `/forgot` endpoint, check the steps bellow:*

1. User forgot his password, he submit data to a form who also send data to `/forgot` route.

2. Server send a mail with a link (`https://bizzy.now.sh/reset_pswd_form?token=<token>`) valid for either one hour or 5mn depends of the development mode. As you can see the link contains a `token` params it will be used to authenticate user and check that his demand is still valid.

3. One the user load the page a request must be done to `https://bizzy.now.sh/api/resetpassword?token=<token>` where token is the value of the `token` params retrieve from the `https://bizzy.now.sh/reset_pswd_form?token=<token>` url, you should now see the server respond with one of the following answers ⬇️.

### Endpoint
```bash
https://bizzy.now.sh/api/resetpassword?token=<token>
```

### Responses

:::success 200
```js
{
    token: 12423423.457665768234234.235
}
```
:::

> **Note** - Server respond with a 200 status code when token parsed is correct you can store the token result and follow the PUT method process.

---

:::danger 401
```js
{
    error: true,
    message: "Token parameter is not valid, try resend a forgot password request."
}
```
:::

---

:::danger 403
```js
{
    error: true,
    message: "Too many parameters"
}
```
:::

---

:::danger 405
```js
{
    error: true,
    message: "Only GET and PUT methods are allowed on this route."
}
```
:::

---

:::danger 422
```js
{
    error: true,
    message: "Missing parameters"
}
```
:::

## PUT
*The PUT method is used when user is already connected or when the GET method has been verified and had returned an 200 status code.*

### Endpoint
```bash
https://bizzy.now.sh/api/resetpassword
```

### Headers
You must add this props into the header.

```sh
Authorization: <token>
```

> **Note** - When user receives a 200 status code from the `/login`, `/register`, (`/resetpassword` when it is a GET method) the server respond with a property which is called `token` it's this value that must be passed in the `Authorization` header. 

### Body
The data to send can changes if the user is connected or not.

#### User is not connected
Send this object when user comes from the GET method above and has retrieve the JWT.

```json
{
    "newpswd": "newpasswordhere",
    "token": "token"
}
```

> **Note** - The token value must be retrieved from `/resetpassword?token=<token>` route.

#### User is connected
In this case the user is already connected so when a request will be made to this URL the browser will send a cookie `sid` which allow the server to check that the session user is valid, also do not forget to send the `Authorization` header.

```json
{
    "newpswd": "newpasswordhere"
}
```

### Responses

:::success 200
```json
{
    "message": "Password update for <mail-adress>"
}
```
:::

---

:::danger 401
```json
{
    "error": true,
    "message": "One parameter in the body is either expired or not correct please try to send a new forgot password request."
}
```
:::
> **Note** - Server cannot verified the `token` property maybe your link is not valid or expired.

:::danger 401
```json
{
    "error": true,
    "message": "You don't have access here."
}
```
:::
> **Note** - Server cannot the verified the token send into the `Authorization` header.

---

:::danger 403
```json
{
    "error": true,
    "message": "Missing 'Authorization: <token>' header in your request."
}
```

OR

```json
{
    "error": true,
    "message": "Too many parameters."
}
```
:::

---

:::danger 422
```json
{
    "error": true,
    "message": "Missing parameters"
}
```
:::

## Found an error ?
If something is not correct on this documentation do not hesitate to submit an issue [Here](https://github.com/luctst/bizzy-docs/issues)