module.exports = {
  // ...
  plugins: [
    // Use it with the default prefix 'corvu'
    require('@corvu/tailwind'),
    // or with a custom prefix
    require('@corvu/tailwind')({ prefix: 'ui' }),
    // ...
  ],
}
