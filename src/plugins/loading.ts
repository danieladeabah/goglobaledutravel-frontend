export default defineNuxtPlugin(nuxtApp => {
  // Add loading indicator as navigation starts
  nuxtApp.hook('page:start', () => {
    // You can add additional loading logic here if needed
  })

  // Remove loading indicator when navigation ends
  nuxtApp.hook('page:finish', () => {
    // You can add additional loading logic here if needed
  })

  // Remove loading indicator when navigation is cancelled (optional)
  nuxtApp.hook('app:error', () => {
    // You can add error handling or logging here
  })
})
