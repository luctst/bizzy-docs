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
    message: "Mail send to <mail-adress>"
}
```
:::

> **Note** - If server respond with a 200 code a mail will be sent to the adress enter in the `mail` body property with a link valid for one hour. If you're in development mode the mail will be send to a fake mailbox with a link valid for 5mn.

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

:::danger 405
```js
{
    error: true,
    message: "This route can only be access with a POST method."
}
```
:::

## Found an error ?
If something is not correct on this documentation do not hesitate to submit an issue [Here](https://github.com/luctst/bizzy-docs/issues)