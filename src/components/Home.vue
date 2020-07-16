<template>
  <v-parallax
    light
    src="@/assets/images/pic2.png"
    size
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="font1 mb-4">{{ title }}</h1>
        <h4 class="font1">{{ subTitle }}</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        title: "YutaYamada.com",
        subTitle: "Welcome to my portfolio!",

      }
    }
  }
</script>
