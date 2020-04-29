<style lang="stylus">
.heading
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
  functional: true,
  name: 'Heading',
  props: {
    level: {
      type: [String, Number],
      default: 1,
      validator: level => {
        return headingType.includes(parseInt(level))
      }
    }
  },
  methods: {},
  render(createElement, context) {
    const { props, children, data } = context
    console.log('data :>> ', data)
    return createElement(
      `h${props.level}`,
      {
        ...data,
        class: {
          [`heading-h${props.level}`]: true
        },
        attrs: {}
      },
      children
    )
  }
}
</script>
