<style lang="stylus">
.text
  margin 0
  font-weight 500
  word-wrap break-word

  &-h1
    font-size rem(36px)

  &-h2
    font-size rem(30px)

  &-h3
    font-size rem(24px)

  &-h4
    font-size rem(20px)

  &-h5
    font-size rem(16px)

  &-h6
    font-size rem(14px)
</style>

<script>
const headingType = [1, 2, 3, 4, 5, 6]
export default {
  name: 'BasicText',
  props: {
    level: {
      type: String,
      default: 'p',
      validator: level => headingType.includes(level)
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  },
  render(createElement) {
    return createElement(
      `${this.level}`,
      {
        // 事件
        on: {
          click: this.clickHandler
        }
      },
      [this.$slots.default]
    )
  }
}
</script>
