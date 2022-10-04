# SQL CONSTRAINTS

## Resources

- [SQL Constraints Postgres Tutorial](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-check-constraint/)

## Example Table Constraints

```sql
CREATE TABLE public.customer (
    customer_id integer DEFAULT nextval('public.customer_customer_id_seq'::regclass) NOT NULL,
    store_id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    address_id integer NOT NULL,
    activebool boolean DEFAULT true NOT NULL,
    create_date date DEFAULT CURRENT_DATE NOT NULL,
    last_update timestamp with time zone DEFAULT now(),
    active integer
);
```

## Example Table CHECK Constraints

```sql
ALTER TABLE prices_list
ADD CONSTRAINT price_discount_check
CHECK (
	price > 0
	AND discount >= 0
	AND price > discount
);
```

## Example Column CHECK Constraints

```sql
CREATE TABLE orders(
ord_no integer,
ord_date date,
item_name character(35),
item_grade character(1),
ord_qty numeric,
ord_amount numeric CHECK (ord_amount>0)
);
```
