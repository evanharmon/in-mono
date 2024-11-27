#!/usr/bin/env bash

## Download PAGILA sample database release
if ! [ -f pagila.tar.gz ]; then
  curl -Lo pagila.tar.gz \
    https://github.com/devrimgunduz/pagila/archive/refs/tags/pagila-v3.0.0.tar.gz
fi

## Extract from archive
## extracted files will exist in a 
tar xf pagila.tar.gz

## explicitly move required files out of 'pagila-pagila-v3.0.0' folder
## include readme / license
mv pagila-pagila-v3.0.0/README.md pagila-README.md
mv pagila-pagila-v3.0.0/LICENSE.txt pagila-LICENSE.txt


## include database data files
mv pagila-pagila-v3.0.0/pagila-schema.sql pagila-schema.sql
mv pagila-pagila-v3.0.0/pagila-data.sql pagila-data.sql

## remove archive folder leaving only selected files
rm -rf ./pagila-pagila-v3.0.0