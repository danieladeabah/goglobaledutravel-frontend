<template>
  <div ref="mapContainer" class="h-full w-full"></div>
</template>

<script setup>
const props = defineProps({
  apiKey: {
    type: String,
    required: true
  },
  center: {
    type: Object,
    default: () => ({ lat: 0, lng: 0 })
  },
  zoom: {
    type: Number,
    default: 8
  },
  markers: {
    type: Array,
    default: () => []
  },
  mapId: {
    type: String,
    default: 'map'
  }
})

const mapContainer = ref(null)
const googleMap = ref(null)
const googleMapMarkers = ref([])

// Load Google Maps API script
const isLoadingMap = ref(false)
const mapError = ref(null)

const loadGoogleMapsApi = () => {
  return new Promise((resolve, reject) => {
    // Check if maps is already loaded
    if (window.google && window.google.maps) {
      return resolve()
    }

    isLoadingMap.value = true

    // Create a unique callback name to avoid conflicts
    const callbackName = `initGoogleMap_${Date.now()}`

    // Set up callback function
    window[callbackName] = () => {
      isLoadingMap.value = false
      resolve()
    }

    // Handle API loading errors
    const handleScriptError = () => {
      const error = 'Google Maps failed to load. Please check your API key.'
      console.error(error)
      mapError.value = error
      isLoadingMap.value = false
      reject(new Error(error))
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}&callback=${callbackName}`
    script.async = true
    script.defer = true
    script.onerror = handleScriptError

    document.head.appendChild(script)
  })
}

// Initialize the map
const initMap = () => {
  if (!mapContainer.value) return

  googleMap.value = new window.google.maps.Map(mapContainer.value, {
    center: props.center,
    zoom: props.zoom,
    mapId: props.mapId
  })

  addMarkers()
}

// Add markers to the map
const addMarkers = () => {
  // Clear existing markers
  googleMapMarkers.value.forEach(marker => marker.setMap(null))
  googleMapMarkers.value = []

  if (!props.markers || !googleMap.value) return

  props.markers.forEach(markerData => {
    const marker = new window.google.maps.Marker({
      position: markerData.position,
      map: googleMap.value,
      title: markerData.title
    })

    // Add info windows if content is provided
    if (markerData.content) {
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div class="p-2"><h3 class="font-semibold">${markerData.title}</h3><p>${markerData.content}</p></div>`
      })

      marker.addListener('click', () => {
        infoWindow.open(googleMap.value, marker)
      })
    }

    googleMapMarkers.value.push(marker)
  })
}

// Update markers when they change
watch(
  () => props.markers,
  () => {
    addMarkers()
  },
  { deep: true }
)

// Update map center when it changes
watch(
  () => props.center,
  () => {
    if (googleMap.value) {
      googleMap.value.setCenter(props.center)
    }
  },
  { deep: true }
)

// Update zoom when it changes
watch(
  () => props.zoom,
  () => {
    if (googleMap.value) {
      googleMap.value.setZoom(props.zoom)
    }
  }
)

// Initialize map when component is mounted
onMounted(async () => {
  try {
    await loadGoogleMapsApi()
    initMap()
  } catch (error) {
    console.error('Failed to initialize map:', error)
  }
})
</script>
