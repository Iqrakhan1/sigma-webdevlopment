## connect backend to database

1. first create [index](index.html) file

2. initilize package.json using

```
npm init -y
```

3. install packages

- express for server
- nodemon for hot reload
- mongoose for creating user model and database

```
 npm install express, mongoose,  nodemon
```

4. create [employee](./models/employee.jsuser.js) model using mongoose schema

5. write logic to gerate rendom employess in index.js and connect to mongodb 