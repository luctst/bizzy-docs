---
hide_title: true
sidebar_label: /login
---

# Description
*Check if an user exist in the bizzy BDD.*

## Endpoint
```
https://bizzy.now.sh/api/login
```

## Methods
This routes only accepts this method:

* **POST**


## Body
```js
{
    "mail": "mymail@gmail.com",
    "pswd": "password"
}
```

## Response
:::success 200

data:
```js
{
    token: 12423432.23553.345
}
```
:::

> **Note** - This will also create a `sid` cookie who expires one week later in your browser that will allow the server to check your session is valid.

---

:::danger 400
```js
{
    error: true,
    message: "You can only have two parameters."
}
```
:::

---

:::danger 401
```js
{
    error: true,
    message: "That email and password combination is incorrect."
}
```
:::

---

:::danger 405
```js
{
    error: true,
    message: "This route can only be access with POST method."
}
```
:::

---

:::danger 403
```js
{
    error: true,
    message: "user unknown"
}
```
:::

---

:::danger 422
```js
{
    error: true,
    message: "Missing a parameter"
}
```
:::

## Found an error ?
If something is not correct on this documentation do not hesitate to submit an issue [Here](https://github.com/luctst/bizzy-docs/issues)