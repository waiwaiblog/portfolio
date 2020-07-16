<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <h1 class="text-center font1">Skills</h1>
      </v-col>
    </v-row>

    <v-row justify="center" align-content="center">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12" sm="9" md="6" lg="6" xl="4"
      >
        <v-card
          :color="item.color"
          dark
          class="mx-auto"
          max-width="500"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="font1"
                v-text="item.title"
              ></v-card-title>

              <v-card-subtitle v-text="item.comment" class="text-content"></v-card-subtitle>
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img contain :src="item.src">
                <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                ><v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
                </template>
              </v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'HTML',
          comment: '',
          color: 'orange',
          src: require('@/assets/images/html-5.svg'),
        },
        {
          title: 'CSS',
          comment: '',
          color: 'blue',
          src: require('@/assets/images/css-3.svg'),
        },
        {
          title: 'Sass',
          comment: '',
          color: '#e29fbd',
          src: require('@/assets/images/sass.svg'),
        },
        {
          title: 'PHP',
          comment: '',
          color: '#4F5D95',
          src: require('@/assets/images/php.svg'),
        },
        {
          title: 'JavaScript',
          comment: '',
          color: '#f1e05a',
          src: require('@/assets/images/javascript.svg'),
        },
        {
          title: 'Laravel',
          comment: '',
          color: '#fc817f',
          src: require('@/assets/images/laravel.svg'),
        },
        {
          title: 'Vue.js',
          comment: '',
          color: '#199f4b',
          src: require('@/assets/images/vue.svg'),
        },
        {
          title: 'MySQL',
          comment: '',
          color: '#124e78',
          src: require('@/assets/images/mysql.svg'),
        },
        {
          title: 'AmazonWebService',
          comment: '',
          color: '#f6b33f',
          src: require('@/assets/images/ss7.svg'),
        },
        {
          title: 'Docker',
          comment: '',
          color: '#59acf3',
          src: require('@/assets/images/docker-icon.svg'),
        },
        {
          title: 'Git',
          comment: '',
          color: '#f18080',
          src: require('@/assets/images/git-icon.svg'),
        },
        {
          title: 'AdobeXD',
          comment: '',
          color: '#F82CF4',
          src: require('@/assets/images/adobexd.svg'),
        },
      ]
    })
  }
</script>
