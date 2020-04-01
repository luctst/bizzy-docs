---
sidebar_label: /forgot
hide_title: true
---

# Description
*Allow to send an mail to a specific user when he forgot his password*

## Endpoint
```
https://bizzy.now.sh/api/forgot
```

## Method
* **POST**

## Body
```js
{
    "mail": "mail.exemple@gmail.com"
}
```

## Response
:::success 200
```js
{
    message: "Mail sent"
}
```
:::

---

:::danger 400
```js
{
    error: true,
    message: "You can only have one parameter"
}
```

Or

```js
{
    error: true,
    message: "Missing mail parameter"
}
```

Or

```js
{
    error: true,
    message: "Property should be string"
}
```
:::

:::danger 401
```js
{
    error: true,
    message: "This route can only be access with a POST method."
}
```
:::

:::danger 403
```js
{
    error: true,
    message: "Only accessible with a POST method"
}
```
:::