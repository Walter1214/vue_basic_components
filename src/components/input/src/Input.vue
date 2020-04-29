<style lang="stylus">
.input
  display flex
  align-items center
  padding 0 16px
  border 2px solid
  border-color var(--black)
  border-radius 5px
  background var(--light)
  font-size rem(14px)
  cursor pointer
  transition border .3s

  &.input--md
    height 32px

  &.input--lg
    height 50px

    .input__inner
      font-size rem(16px)

  &:not([data-is-disabled="true"]):not([data-is-error="true"]):hover
  &:not([data-is-disabled="true"]):not([data-is-error="true"]):focus-within
    border-color var(--primary)

  &[data-is-disabled="true"]
    background-color #f0f3f0
    border-color #f0f3f0
    cursor not-allowed
    .input__inner
      color var(--secondary)

  &[data-is-error="true"]
    border-color var(--error)

  &__inner
    outline 0
    border 0
    flex 1
    background transparent
    color var(--secondary)

    &:read-only
      cursor pointer

    &::placeholder
      color var(--grey)
</style>

<template lang="pug">
  .input(
    :class="[sizeClass]"
    :data-is-disabled="isDisabled"
    :data-is-error="isError"
    )
    span.input__preffix(v-if="hasPrefix")
      slot(name="prefix")
    input.input__inner(
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
      :disabled="isDisabled"
      )
    span.input__suffix(v-if="hasSuffix")
      slot(name="suffix")
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator: size => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(size)
      }
    }
  },
  computed: {
    // },
    inputListeners: function () {
      const self = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            self.$emit('input', event.target.value)
          }
        }
      )
    },
    hasPrefix() {
      return !!this.$slots.prefix || !!this.$scopedSlots.prefix
    },
    hasSuffix() {
      return !!this.$slots.suffix || !!this.$scopedSlots.suffix
    },
    sizeClass() {
      return 'input--' + this.size
    }
  }
}
</script>
