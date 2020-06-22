import VueAmap from './Vmap'
import VueAmapComponent from './VmapMarker'
import AMapLoader from '@amap/amap-jsapi-loader'

const components = [VueAmapComponent, VueAmap]
const install = ((
  Vue1, options) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
  components.forEach((component) => Vue1.component(component.name, component))
})

export default {
  install,
}
