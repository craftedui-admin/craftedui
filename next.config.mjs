/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'

const nextConfig = withMDX()({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
})

export default nextConfig;
