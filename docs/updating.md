# Updating npm dependencies

- Check outdated packages
```sh
npm outdated
```

- Update local packages according to `package.json`
```sh
npm update
```

- Upgrade packages manually
```sh
npm install --save[-dev] <package_name>@latest
```

Alternatively, you can use [npm-check](https://github.com/dylang/npm-check) to perform an interactive upgrade:
```sh
npm-check -u --skip-unused
```

## Locking package versions

Starting from `npm@5` a new `package-lock.json` file is
[automatically generated](https://docs.npmjs.com/files/package-locks) when using `npm install` commands, to ensure a
reproducible dependency tree and avoid unwanted package updates.

If you use a previous npm version, it is recommended to use [npm shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) to
lock down all your dependencies version:
```sh
npm shrinkwrap --dev
```

This will create a file `npm-shrinkwrap.json` alongside your `package.json` files.

> Do not forget to run shrinkwrap each time you manually update your dependencies!

# Updating angular-related dependencies

See the [Angular update website](https://update.angular.io) to guide you through the updating/upgrading steps.
