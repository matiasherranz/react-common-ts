import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist/es5',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: './dist/es6',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
    },
  ],
  external: ['styled-components'],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    url(),
    image(),
  ],
};
