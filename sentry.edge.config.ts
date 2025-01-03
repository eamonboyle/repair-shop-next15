import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://521a3d056ca23300b9a3145192a57666@o4508137949954048.ingest.de.sentry.io/4508137952378960",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
