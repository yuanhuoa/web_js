<template>
  <a class="normal-a"
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
    ...<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </a>
</template>

<script>
import routes from '../router/index'

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.href === this.$root.currentRoute
    }
  },
  methods: {
    go (event) {
      event.preventDefault()
      this.$root.currentRoute = this.href
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      )
    }
  }
}
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
  .normal-a{
    text-decoration: none;
  }
</style>
