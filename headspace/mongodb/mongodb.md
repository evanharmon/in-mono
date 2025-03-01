# MONGODB

## SERVER

### Start Mongodb Server

Assumes you've created a database folder `$HOME/data/db` directory

```console
mkdir -p $HOME/data/db
mongod
```

### Start Mongo and specify a user /data/db

```console
mongod --dbpath $HOME/data/db
```

## CLI

### Start Mongodb Command Line

```console
mongo
```

### Create Database

```console
use databasename
```

### Show Databases

```console
show dbs
```

### Show Collections (Tables)

```console
show collections
```

### Check Connetions

```console
use admin
db.serverStatus().connections
```
