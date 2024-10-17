/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig = {}

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "personal-xge",
  project: "repair-shop",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs

  hideSourceMaps: true,

  disableLogger: true,
})
