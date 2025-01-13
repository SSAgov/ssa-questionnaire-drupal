import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
const path = require('path');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDevelopment = mode === 'development';

  const mobileLabDirs = {
    // eligibility: '/view/check-eligibility-for-benefits/dist/',
    eligibility: '/view/eligibility/dist/',
    replacement: '/view/card-replacement/dist/',
    // replacement: '/view/test-site-alerts/dist/',
    // replacement: '/view/test-alerts/dist/',
    // replacement: '/view/test-date-field/dist/',
    feedback: '/view/feedback-app/dist/',
  };

  const base = {
    local: '',
    drupal: '',
    mobile_lab: process.env.VITE_APP ? mobileLabDirs[process.env.VITE_APP] : '',
  };

  return defineConfig({
    plugins: [
      react(),
      {
        ...svgr({
          memo: true,
          icon: true,
          svgoConfig: {
            removeViewBox: false,
          },
        }),
        enforce: 'pre',
      },
    ],
    base: base[
      process.env.VITE_DEPLOYMENT_PLATFORM
        ? process.env.VITE_DEPLOYMENT_PLATFORM
        : 'drupal'
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }, { find: '$', replacement: path.resolve(__dirname) }],
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    build: {
      rollupOptions: {
        output: {
          // dir: `dist_${process.env.VITE_APP}`,
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
  });
};

// export default defineConfig({
//   plugins: [react()],
//   base: '/view/check-eligibility-for-benefits/dist/',
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//   },
//   esbuild: {
//     logOverride: { 'this-is-undefined-in-esm': 'silent' },
//   },
//   test: {
//     environment: 'happy-dom'
//   },
// });
