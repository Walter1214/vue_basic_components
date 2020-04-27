import Input from './src/Input.vue'
Input.install = function (Vue) {
  console.log('Vue', Input)
  Vue.component(`Basic${Input.name}`, Input)
}

export default Input
