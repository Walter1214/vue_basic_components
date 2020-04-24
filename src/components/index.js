import Vue from 'vue'
import Input from './input/index'

const basicComponents = [Input]

const install = function () {
  basicComponents.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Input
}
