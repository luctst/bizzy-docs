---
hide_title: true
sidebar_label: /register
---

# Description
*Create an user in the bizzy bdd.*

## Endpoint
```
https://bizzy.now.sh/api/register
```

## Method
* **POST**

## Body
```js
{
    "mail": "yourmail@gmail.com",
    "pswd": "32432DFG",
    "username": "your-username"
}
```

## Response
:::success 200
```js
{
    token: "12313.1234535.5776"
}
```
:::

---

:::danger 400
```js
{
    error: true,
    message: "Missing parameters"
}
```

Or

```js
{
    error: true,
    message: "Properties should be string"
}
```
:::

---

:::danger 401
```js
{
    error: true,
    message: "This route can only be acces with a POST method."
}
```
:::

--- 

:::danger 409
```js
{
    error: true,
    message: "User already exist"
}
```
:::