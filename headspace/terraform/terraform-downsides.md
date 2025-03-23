# TERRAFORM DOWNSIDES

## File / Folder structure
a lot of planning has to go in to what the folder stucture should look like with
modules.
- lots of variations on what the `best practices` are for multiple accounts, providers, etc.

### Files
lots of different styles that don't necessarily adhere to best practices
- like doing named files `domains.tf` vs just a `main.tf`

### Folders
terraform does not automatically traverse sub folders for *.tf files
it's NOT best practice to have subfolders - have to use modules instead

It's common to have a side `modules` folder. This has it's downsides though:
- `main.tf` files calling modules folder calling modules...

## Modules
modules can be opinionated (not really for re-use) or for re-use
