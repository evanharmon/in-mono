# PYTHON DJANGO MIGRATIONS

## Run migrations after model changes

```bash
python manage.py makemigrations myapp
python manage.py showmigrations myapp
python manage.py migrate myapp
```

## Revert a broken migration
`python manage.py migrate myapp 0002_auto_20220101_1445 --fake`
