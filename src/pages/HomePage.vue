<template>
  
  <section class="row">
    <div class="col-10" v-for="b in blogs" :key="b.id">
      <BlogCard :blogProp="b"/>
    </div>
    </section>

  <!-- {{ blogs }} -->
</template>

<script>
import { onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    async function getBlogs(){
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(()=>{
      getBlogs()
    })

    return {

      blogs: computed (()=> AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
