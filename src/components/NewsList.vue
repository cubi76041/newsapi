<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" v-for="(article, i) in articles" :key="i">
        <v-card>
          <v-img :src="article.urlToImage" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
            <v-card-title v-text="article.title" />
            <v-card-text v-text="article.description" />
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewsList',
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>
