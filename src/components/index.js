import Vue from 'vue'
import Input from './input'

const basicComponents = [Input]

const install = function () {
  basicComponents.forEach(component => {
    Vue.component(`Basic${component.name}`, component)
  })
}

export default {
  install,
  Input
}
