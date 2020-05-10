new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
  exclude: [/swagger-ui/]
})