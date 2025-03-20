# SECURITY CIS-CAT PRO ASSESSOR

## Resources
- [CIS-CAT pro assessor v4 guide](https://ciscat-assessor.docs.cisecurity.org/en/latest/User%20Guide%20-%20Assessor/)

## Examples

### Run against ubuntu

```bash
# interactive mode, report dir of /var/www/html, no timestamps, report name `index.html`
sh ./Assessor-CLI.sh -i -rd /var/www/html/ -nts -rp index
> choose the Ubuntu benchmark
> choose Profile - server
```