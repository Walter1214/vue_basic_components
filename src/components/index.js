import Vue from 'vue'
import Input from './input'
import seo from './seo'
const { Heading } = seo

const basicComponents = [Input, Heading]

const install = function () {
  basicComponents.forEach(component => {
    Vue.component(`Basic${component.name}`, component)
  })
}

export default {
  install,
  Input,
  Heading
}

export { Input, Heading }
