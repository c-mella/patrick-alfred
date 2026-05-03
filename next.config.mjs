import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
