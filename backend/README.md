# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup

Install all dependencies.

    npm install

### Before startup
You need to setup a MongoDB database (can be local or remote).

Make sure you have a collection named 'org' in your database that contains at least one organization with the org_id listed in your environment variable (see below).

An example document inside the org collection in the DB could look like:
```
{
    "_id" : ObjectId("64e0380b3cc28d087655693b"),
    "name" : "Community Center"
}
```

The database also needs to contain users with hashed passwords and their role. We provide a sample script to create hashed passwords. Please read more about hashed password with bcrypt https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/. There should be at least one user with the viewer role and one with the editor role.

Two documents inside the 'users' collection in the DB are:
```
{
    "_id" : ObjectId("662d6fde534d06709c0b697d"),
    "username" : "user",
    "role" : "viewer",
    "password" : "$2b$10$57MGZOViFcB3EkR5qv6Que6ql2WkZ.nH7KO2wRm3MkMZHhvdzeXce",
    "org" : ObjectId("65f4e2e1daf1992ce41df291")
}
{
    "_id" : ObjectId("662d7811637c4e0fc719ad0c"),
    "username" : "admin",
    "role" : "editor",
    "password" : "$2b$10$s1mhi17URib6kbZKXWIwyuidJ6favhYk6wGgjhk.sVIU/cyxjPWuG",
    "org" : ObjectId("65f4e2e1daf1992ce41df291")
}
```

Setup a .env file with the following variables: MONGO_URL, PORT, ORG_ID and JWT_SECRET

    MONGO_URL=mongodb+srv://nmnguy21:CIS4339%40@cis4339.clicqhg.mongodb.net/CIS4339
    PORT=3000
    ORG_ID=65f4e2e1daf1992ce41df291
    JWT_SECRET=R5kG8zXmPb2QJv6FsNtL3HjC9yWx4TdU     //It is used to verify JWT tokens

### Compiles and hot-reloads for development

To start up the backend for development run:

    node app.js

## Postman Documentation

More details about the API endpoints can be be found at <https://documenter.getpostman.com/view/25012176/2s9Y5Zv1xz>
