<style lang="stylus">
$headingTypes = (36px 30px 24px 20px 16px)

.heading
  margin 0
  font-weight 500
  word-wrap break-word

  for fontsSize, i in $headingTypes
    &-h{i+1}
      font-size rem(fontsSize)
</style>

<script>
const headingTypes = [1, 2, 3, 4, 5, 6]
export default {
  functional: true,
  name: 'Heading',
  props: {
    level: {
      type: [String, Number],
      default: 1,
      validator: level => {
        return headingTypes.includes(parseInt(level))
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
