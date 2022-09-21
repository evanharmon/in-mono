#!/usr/bin/env bash

## Download PAGILA sample database release
if ! [ -f sakila-db.tar.gz ]; then
  curl -Lo sakila-db.tar.gz \
    https://downloads.mysql.com/docs/sakila-db.tar.gz
fi

## Extract from archive
## extracted files will exist in a 
tar xf sakila-db.tar.gz

## explicitly move required files out of folder
## include database data files
mv sakila-db/sakila-schema.sql sakila-schema.sql
mv sakila-db/sakila-data.sql sakila-data.sql

## remove archive folder leaving only selected files
rm -rf ./sakila-db