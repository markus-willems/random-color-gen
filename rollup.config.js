import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'randomColorGen',
  },
  plugins: [
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      babelrc: false,
    }),
    uglify(),
  ],
};
