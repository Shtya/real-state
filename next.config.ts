import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [

      {
        source: '/ar/dashboard',
        destination: '/ar/dashboard/tenant',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/en/dashboard',
        destination: '/ar/dashboard/tenant',
        permanent: true,
      },
    ]
  },
};

export default withNextIntl(nextConfig);

