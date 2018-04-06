<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
    :placeholder="placeholder" />
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'edit me hahaha'
      }
    },
    // 计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值
    computed: {
      listeners() {
        return {
          // Pass all component listeners directly to input  ?? 这是干啥用的？
          ...this.$listeners,
          // Override input listener to work with v-model
          input: event => {
            this.$emit('input', event.target.value)
          }
        }
      }
    }
  }
</script>
<style></style>
