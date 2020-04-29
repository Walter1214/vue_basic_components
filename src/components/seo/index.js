import Heading from './src/Heading.vue'

Heading.install = function (Vue) {
  Vue.component(`Basic${Heading.name}`, Heading)
}

export default { Heading }
