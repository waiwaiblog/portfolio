<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" xs="7" sm="10" md="9" lg="10">
        <h1 class="text-center font1">{{ title }}</h1>
        <v-card tag="div" class="py-3">
          <v-card-actions class="justify-center">
            <v-avatar
              class="profile"
              size="20%"
              rounded="lg">
              <v-img src="@/assets/images/prof.jpeg">
              </v-img>
            </v-avatar>
          </v-card-actions>
          <v-card-title class="py-2">
            <h2 class="font1">{{ name }}</h2>
          </v-card-title>
          <v-card-text>
            <h4 class="font1">(yy.dec5@icloud.com)</h4>
          </v-card-text>
          <v-card-text>
            <div class="text-left">
                <span class="text-content">
                  <p>学生時代からパソコンに触るのが好きで、ホームページなどを作っていた。PerlでのCGI掲示板やゲームが流行っていた中、改造しようと手を出すが難しくて挫折。</p>
                  <p>時は経ち、接骨院を経営している先輩が売り上げに伸び悩んでいた時に「ホームページを作りましょう」と提案したことをきっかけに、学生時代の熱が再燃する。
                    将来性も考えた上で、自分が思いっきり熱中できたこと、夢中になれることを仕事にしたいと思い、約4年勤めた会社を退職し独学でエンジニア転職を目指す。</p>
                  <p>約7ヶ月勉強し、楽しさより大変さを感じることが多かった。土台となる大元の言語の勉強からはじめ、フレームワークに入る。
                    だいたいどの言語も仕組みは同じにしろ、複数使えるようにして対応していかなければならない。更に短い周期でのアップデートなど、そのキャッチアップをいかにうまくできるかが肝だと感じた。</p>
                  <p>しかし、エラーを自己解決できた時に楽しさ、設計通りにコードを組めた時の喜びは、今まで感じたことのない気持ちだった。２０代も終わりで、プロのエンジニアになるということは並大抵の努力では叶わないと思うが、
                  がむしゃらに努力することで、夢を叶え、叶えた後もがむしゃらに努力して一流のエンジニアを目指す。</p>
                </span>

            </div>
          </v-card-text>
          <div class="px-2">
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <v-card-title class="font1">{{ item.title }}</v-card-title>
                  <v-card-text class="white text--primary pt-5">
                    <p class="font1">{{ item.comment }}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    computed: {
      dense() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    },
    data: () => ({
      title: 'Profile',
      name: 'Yuta Yamada',
      introduce: {
        1: '小学５年生の時に、インターネットに初めて触れる。',
        2: '野球少年だった自分は「パワプロくんポケット」にハマっており、いわゆる「パワプロサイト」掲示板に顔を出すようになる。掲示板というシステムに魅せられ、のちに交流サイト「パワポケしよう！」を中学生の時に運営開始。編集にはホームページビルダーをメインに用いて、手作業で行なっていた。当時は掲示板やゲームはPerlを使ったものが多く、こちらの改造にも手を出すがあまりの難しさ故に挫折。',
        3: '高校では野球部が忙しくホームページは閉鎖。高校卒業後も動画編集や音楽編集は続け、余興動画など内々で依頼を受けるようになる。専門学校の先輩からホームページ制作依頼を受けた事をきっかけに、再びホームページ制作の勉強を開始。同時に、当時はよくわからなかったPerl、PHPといったサーバーサイド言語を使えば「自分で掲示板が作れる」という事も知り、ますますのめり込む。',
        4: '大のスノーボード好きで、この雪不足が謳われる中、各ゲレンデの正確な積雪情報が知りたい。そういった思いを叶えるべく、「ゲレンデミシュラン」立ち上げのために本格的に勉強開始。',
        5: '現在一児の父にもなり、育児と両立しながら勉強に励んでいる。'
      },
      items: [
        {
          title: 'Senior High school',
          color: 'black',
          icon: 'fa-school',
          comment: 'Shizuoka Nishi Senior High School'
        },
        {
          title: 'Technical school',
          color: 'black',
          icon: 'fa-bone',
          comment: 'Shizuoka Medical College'
        },
        {
          title: 'Company Employee',
          color: 'black',
          icon: 'fa-user-nurse',
          comment: 'Judo Therapist / Functional training instructor'
        },
        {
          title: 'Seasonal Worker',
          color: 'black',
          icon: 'fa-tractor',
          comment: 'live-in Farmer / Snowboard Instructor @ Kawakami vil, NAGANO'
        },
        {
          title: 'Company Employee',
          color: 'black',
          icon: 'fa-truck-moving',
          comment: 'Heavy Duty Truck Driver'
        },
        {
          title: '2020.1〜',
          color: 'black',
          icon: 'fa-code',
          comment: 'I began to study programming'
        },
      ],
    }),
    name: 'Profile',
  }
</script>

<style>

</style>