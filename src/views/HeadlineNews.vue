<template>
  <NewsList :articles="headlineNews" />
</template>

<script>
import { getHeadlineNews } from '@/services/newsapi';
import NewsList from '@/components/NewsList';

export default {
  mounted() {
    this.getHeadlineNews();
  },
  components: { NewsList },
  data() {
    return {
      headlineNews: [],
      error: null,
      currentPage: 1
    };
  },
  methods: {
    async getHeadlineNews() {
      try {
        this.headlineNews = await getHeadlineNews({ page: this.currentPage });
        this.currentPage++;
      } catch (e) {
        console.error(e);
        this.error = e.message;
      }
    }
  }
};
</script>
