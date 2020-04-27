import Heading from './src/Heading.vue'

Heading.install = function (Vue) {
  console.log('Vue', Heading)
  Vue.component(`Basic${Heading.name}`, Heading)
}

export default { Heading }
