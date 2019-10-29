# Gatsby Typesript Tailwind Emotion Starter


## Quick Start

#### Create a Gatsby site
Use the Gatsby CLI to create a new site, specifying the Lumen starter.
```sh
gatsby new my-new-website https://github.com/burnsy/gatsby-typescript-tailwind-emotion-starter
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd my-new-website
gatsby develop
```

## Usage

### Develop

```
npm run develop
```

### Build

```
npm run build
```
Your built file will be in `/public`

### How do i use this?

```javascript
import React from 'react'
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// like this 
const Container = styled.div`
  ${tw`py-8`};
`
// or this
const Text = styled.p(tw`bg-black text-white`);

const Home: FC = () => (
  <Container>
    <Text>
    I am Text component made with Tailwind CSS + EmotionJS + Typescript
    </Text>
  </Container>
)

export default Home
```

### Why would I use it?

Becuase you would like to use Tailwind CSS with Typescript & JS-IN-CSS. You know how awesome it utility first CSS. 

Compared to CSS framework like [Bootstrap](http://getbootstrap.com/), [Tailwind CSS](https://tailwindcss.com) gives you alot of class as utilities. The file size gets bloated. In fact it's 1.5 times bigger than Bootstrap. (https://tailwindcss.com/docs/controlling-file-size )

CSS-in-JS to save.

Fortunately, you can use CSS-in-JS like [Emotion](https://github.com/emotion-js/emotion), to only load needed styles. So you can keep you css size small.

Furthremore, CSS-in-JS is just awesome. [CSS in JS: Benefits, Drawbacks, and Tooling](https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/)

Why Gatsby?
Because Gatsby is blazing fast, and comes with alot of plugins

## For more information

- [Github](https://github.com/Burnsy/gatsby-typescript-tailwind-emotion-starter)
- [gatsby-typescript-tailwind-emotion-starter](https://github.com/Burnsy/gatsby-typescript-tailwind-emotion-starter)
- Got a question? [Submit an issue](https://github.com/Burnsy/gatsby-typescript-tailwind-emotion-starter/issues/new)

## Contributing

- [Submit an idea](https://github.com/Burnsy/gatsby-typescript-tailwind-emotion-starter/issues/new)
- Make a pull request

## Insperation 
This template was built of and is an updated version of [react-tailwind-emotion-starter](https://github.com/muhajirdev/react-tailwind-emotion-starter). Thanks you to [muhajirdev](https://github.com/muhajirdev/).

**Enjoy!**
