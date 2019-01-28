
##### Git Pull  for Specific Project 
```
git init

git config core.sparsecheckout true

echo react-cra/ >> .git/info/sparse-checkout

git remote add -f origin https://github.com/patelmahesh6/React.git

git pull origin master


```

