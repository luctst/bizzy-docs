---
id: introduction
hide_title: true
---

# Read this !
Welcome on the bizzy API documentation please check that all your request are valid by regarding all the points below:

* API endpoint - `https://bizzy.now.sh/api/${custom-route}`.
* If you need to send data it is always in JSON.
* Method availables `POST, GET, PUT, DELETE`.
* If server respond with a `400x` code the response will alwaye be like that `{error: true, message: <information's about error>}`.

If any of this conditions is not verifying the server will respond with one of this options:

:::danger 406
```js
{
    error: true,
    message: "This route can only receive JSON data."
}
```
:::

---

:::danger 422
```js
{
    error: true,
    message: "Missing data in body"
}
```
:::

## Configuration
If you're a contributor and you'll like to start fix, add, create a new features or something else on the project, make sure you have a `.env` file at the root of your folder with this variables. 

```bash
DB_URL = <bdd-url>
MAILUSER = <mail-user-development>
MAILMDP = <mail-mdp-development>
```

> **Note** - The values above are here as examples.

## Routes
All the API routes are availables under the *Routes* section name files indicate the routes for exemple you want interact with the login endpoint you must send a request to this url `https://bizzy.now.sh/api/login`.

## Found an error ?
If something is not correct on this documentation do not hesitate to submit an issue [Here](https://github.com/luctst/bizzy-docs/issues)