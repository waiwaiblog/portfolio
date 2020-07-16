<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <h1 class="text-center font1">Works</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12" sm="12" md="6" lg="6" xl="4"
      >
        <v-card
          class="mx-auto mb-3"
          max-width="600"
          shaped
        >
        <v-hover v-slot:default="{ hover }">
          <v-img
            height="200px"
            contain
            :src="item.src"
          >
            <v-expand-transition>
              <v-card
                v-if="hover"
                height="100%"
                width="100%"
                class="d-flex transition-fast-in-fast-out v-card--reveal font1 white--text"
                :href="item.link"
                target="_blank"
                rel="noopener">
                Learn More
              </v-card>
            </v-expand-transition>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey darken-4"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-hover>
          <v-card-title class="center font1">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="pb-0 font1" align="right">
            <v-btn
              v-if="item.isGitHub"
              class=""
              icon
              target="_blank"
              rel="noopener"
              :href="item.github"
            >
              <v-icon size="20px">mdi-github</v-icon>
            </v-btn>
<!--            <v-btn-->
<!--              class="mr-2"-->
<!--              icon-->
<!--              target="_blank"-->
<!--              rel="noopener"-->
<!--            >-->
<!--              <v-icon size="20px">mdi-book-open-page-variant</v-icon>-->
<!--            </v-btn>-->
            <span class="bottom">{{ item.date }}</span></v-card-subtitle>

          <v-card-text class="text--primary">
            <div class="text-height text-content">{{ item.comment }}</div>
          </v-card-text>

          <v-card-actions>
            <v-chip
              text-color="white"
              class="mr-2 text-content" v-for="(tag,i) in item.tags"
              :key="i"
              :color="tag.color"
            >

              {{ tag.value }}
            </v-chip>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'My Portfolio Site',
            comment: '現在閲覧されている、当サイトです。Vue.js、Vuetifyを用いて制作しました。AWS EC2サーバー上で運営しております。',
            src: require('@/assets/images/ss1.png'),
            link: 'https://yutayamada.com',
            github: 'https://github.com/waiwaiblog/portfolio',
            isGitHub: true,
            date: '2020/06',
            tags: [
              {
                color: '#199f4b',
                value: 'Vue.js',
              },
              {
                color: '#199f4b',
                value: 'Vue Router',
              },
              {
                color: '#199f4b',
                value: 'VueCLI',
              },
              {
                color: '#5fa9e8',
                value: 'Vuetify',
              },
            ]
          },
          {
            title: 'ぶろぐ＠備忘録',
            comment: 'WordPressを用いた勉強の備忘録ブログです。',
            src: require('@/assets/images/ss8.png'),
            link: 'https://waiwaiblog.net/blog',
            github: '',
            isGitHub: false,
            date: '2020/03',
            tags: [
              {
                color: '#117AC9',
                value: 'WordPress',
              },
              {
                color: '#4F5D95',
                value: 'PHP',
              },
            ]
          },
          {
            title: 'Todos',
            comment: 'コンポーネントで切り分けて、編集機能、検索機能、並び替え機能など実装しています。',
            src: require('@/assets/images/ss2.png'),
            link: 'https://yutayamada.com/todos',
            github: 'https://github.com/waiwaiblog/todos',
            isGitHub: true,
            date: '2020/06',
            tags: [
              {
                color: '#199f4b',
                value: 'Vue.js',
              },
              {
                color: '#199f4b',
                value: 'Vue Router',
              },
              {
                color: '#199f4b',
                value: 'VueCLI',
              },
            ]
          },
          {
            title: 'ゲレンデミシュラン Ver.2',
            comment: '以前にPHPで作ったものをLaravelで書き換えました。',
            src: require('@/assets/images/ss3.png'),
            link: 'https://yutayamada.com/gelande_michelin',
            github: 'https://github.com/waiwaiblog/gelande_michelin',
            isGitHub: true,
            date: '2020/05',
            tags: [
              {
                color: '#fa5e35',
                value: 'Laravel',
              },
              {
                color: '#7952B3',
                value: 'BootStrap',
              },
            ]
          },
          {
            title: 'TOY REUSE',
            comment: '子ども用品専門のフリマサイトです。生のPHPで構築しています。',
            src: require('@/assets/images/ss4.png'),
            link: 'https://yutayamada.com/akachan',
            github: 'https://github.com/waiwaiblog/akachan',
            isGitHub: true,
            date: '2020/04',
            tags: [
              {
                color: '#4F5D95',
                value: 'PHP',
              },
              {
                color: '#f1e05a',
                value: 'jQuery',
              },
            ]
          },
          {
            title: '90年代の日本語ラップレビューする会',
            comment: 'アルバムレビューサイト。生のPHPで構築しています。',
            src: require('@/assets/images/ss5.png'),
            link: 'https://yutayamada.com/nihongo_rap',
            github: 'https://github.com/waiwaiblog/nihongo_rap',
            isGitHub: true,
            date: '2020/04',
            tags: [
              {
                color: '#4F5D95',
                value: 'PHP',
              },
              {
                color: '#f1e05a',
                value: 'jQuery',
              },
            ]
          },
          {
            title: 'ゲレンデミシュラン',
            comment: 'ゲレンデレビューサイト。PHPを使った初めてのページ制作物。',
            src: require('@/assets/images/ss6.png'),
            link: 'https://yutayamada.com/gelandecom',
            github: 'https://github.com/waiwaiblog/gelandecom',
            isGitHub: true,
            date: '2020/03',
            tags: [
              {
                color: '#4F5D95',
                value: 'PHP',
              },
            ]
          },
        ]
      }
    }
  }
</script>


<style scoped>
  .text-height {
    min-height: 50px;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    background-color: rgba(17, 17, 17, 0.6);
    position: absolute;
    width: 100%;
  }
  .bottom {
    vertical-align: middle;
  }
  .center {
    justify-content: center;
  }
</style>