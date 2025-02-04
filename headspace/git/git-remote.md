# GIT REMOTE

## Set Remote for Tracking

```bash
git branch -u origin/branchname
git remote add origin https://github.com/evanharmon/my-repo.git
git push -u origin master
```

## Add Additional Mirror To Remote

[Guide](http://caseyscarborough.com/blog/2013/08/25/pushing-to-multiple-remotes-using-git/)
example: aws codecommit as additional mirror, git push will push to both repos now

```bash
git remote add origin git@bitbucket.org:username/example.git
git remote rename origin bitbucket
git remote add codecommit ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/my-repo
```

edit config and add the below type origin

`git config -e`

```
[remote "origin"]
	url = git@bitbucket.org:username/example.git
	url = ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/example
```

## Remove upstream push on a forked repository
`git remote set-url --push upstream ""`
now only fetches will be possible from upstream forked repo source