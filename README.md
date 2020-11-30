# Babel Plugin Typescript Template

![Build and Test](https://github.com/coffee-cup/babel-plugin-typescript-template/workflows/Build%20and%20Test/badge.svg)

This repo is a template you can use to experiment and play around with babel
plugins.

## How to use

Code you want to transpile is passed through stdin. For example, create a file
called `index.js`.

```shell
echo "const foo = x;" > index.js
```

and pass it to `yarn start`

```shell
cat index.js | yarn start
```

## Testing

[Jest](https://jestjs.io/) is used to test the plugin.

```shell
yarn test
```

## What is Babel

[Babel](https://babeljs.io/) is a JavaScript compiler. It takes JS as input,
converts it to an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree), and
then walks the tree with
[visitors](https://en.wikipedia.org/wiki/Visitor_pattern) provided by plugins. I
highly recommend checking out the [plugin
handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
for detailed information on how to write a plugin.

## Resources

- [Plugin handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [AST Explorer](https://astexplorer.net/)
- [Babel AST Spec](https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md)
- [Babel types](https://babeljs.io/docs/en/babel-types)
- [Babel core plugins](https://github.com/babel/babel/tree/master/packages)
- [Babel plugin macros](https://github.com/kentcdodds/babel-plugin-macros)

## Interested?

If you are interested in trying out the alpha for the demo that was shown at the
end of the session, please get in touch!
