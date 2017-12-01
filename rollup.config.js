import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/monet.js',
  output: {
    file: 'dist/monet.js',
    format: 'iife',
    name: 'Monet'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**'
    })
  ]
};