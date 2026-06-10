import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getEnvironmentVariables = (mode: string) => {
  if (mode === 'development') {
    // Local dev — real hardcoded values, never committed with secrets
    return {
      VITE_APP_ENV:    'local',
      VITE_APP_URL:    'http://localhost:3000',
      VITE_API_ENDPOINT:    'http://localhost:5000/API',
    }
  }

  // mode === 'production' — any CI build (dev / qa / preprod / prod)
  // Azure Replace Tokens task swaps #{TOKEN}# per environment at deploy time
  return {
    VITE_APP_ENV:    '#{APP_ENV}#',
    VITE_APP_URL:    '#{APP_URL}#',
    VITE_API_ENDPOINT:    '#{API_ENDPOINT}#',
  }
}

export default defineConfig(({ mode }) => {
  const isLocal = mode === 'development'
  const envVars = getEnvironmentVariables(mode)

  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@':            path.resolve(__dirname, './src'),
        '@components':  path.resolve(__dirname, './src/components'),
        '@hooks':       path.resolve(__dirname, './src/hooks'),
        '@services':    path.resolve(__dirname, './src/services'),
        '@utils':       path.resolve(__dirname, './src/utils'),
        '@types':       path.resolve(__dirname, './src/types'),
        '@config':      path.resolve(__dirname, './src/config'),
        '@routes':      path.resolve(__dirname, './src/routes'),
      },
    },

    server: {
      port: 3000,
      open: true,
    },

    preview: {
      port: 3000,
    },

    base: isLocal ? '/' : `${envVars.VITE_APP_URL}/`,

    build: {
      outDir: 'dist',
      // Source maps on for local dev; disabled for CI builds
      sourcemap: isLocal,
    },

    define: Object.fromEntries(
      Object.entries(envVars).map(([k, v]) => [`process.env.${k}`, JSON.stringify(v)])
    ),
  }
})