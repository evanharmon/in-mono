# AWS ORGANIZATIONS AI SERVICES OPT OUT POLICIES
organizational opt out policies that affect all member accounts

## Resources
- [AI Services Opt Out Policy Docs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html)
- [AI Services Opt Out Policy Examples](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out_syntax.html)

## Limitations
- applies to all regions
- capitalization of values matter!

## Example Complete Opt Out

```json
{
    "services": {
        "@@operators_allowed_for_child_policies": ["@@none"],
        "default": {
            "@@operators_allowed_for_child_policies": ["@@none"],
            "opt_out_policy": {
                "@@operators_allowed_for_child_policies": ["@@none"],
                "@@assign": "optOut"
            }
        }
    }
}
```