<template>
  <footer>
    <Logo />
    <a
      href=""
      target="_blanck">
      (c){{ new Date().getFullYear() }}</a>
  </footer>
</template>

<script>
import Logo from "~/components/Logo"

export default {
  components:{
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer{
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo{
    display: block;
    margin-bottom: 4px;
  };
  a{
    text-decoration: none;
  }
}
</style>