# PULUMI COMPONENT RESOURCES

## Resources
- [Pulumi component resources docs](https://www.pulumi.com/docs/iac/concepts/resources/components/)
- [Pulumi python component resource example](https://www.pulumi.com/docs/iac/using-pulumi/extending-pulumi/build-a-component/)

## Best practices
- always call `self.register_outputs()` at the end of constructors in the class

### Register outputs
```python
# By registering the outputs on which the component depends, we ensure
# that the Pulumi CLI will wait for all the outputs to be created before
# considering the component itself to have been created.
self.register_outputs({
    'endpoint': bucket_website.website_endpoint
})
```
