# PYTHON ARGS

## Resources

- [Python argparse parse args](https://docs.python.org/3/library/argparse.html)

## Parse command-line arguments

supports defaults as well

```python
if __name__ == '__main__':
    from argparse import ArgumentParser
    parser = ArgumentParser()
    parser.add_argument('-p', '--port', type=int, default=9000)
    args = parser.parse_args()
    port = args.port
    app.run(host='0.0.0.0', port=args.port)
```
