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
This routes only accepts those methods:

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
    message: "This route can only be access with POST method."
}
```

Or

```js
{
    error: true,
    message: "That email and password combination is incorrect."
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