<template>

<div class="col-10" v-for="b in blogs" :key="b.id">
<BlogCard :blogProp="b"/>

</div>


</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profileService } from '../services/ProfileService.js';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';

 
export default {
    setup(){
        const route= useRoute()
                async function getProfile(){
            try {
                await profileService.getProfileById(route.params.id)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getBlogsByProfile(){
            try {
                await blogsService.getBlogsByProfile(route.params.id)
            } catch (error) {
                
            }
        }

onMounted(()=>{
    getProfile()
    getBlogsByProfile()
})
        return {

            profile: computed(()=> AppState.activeProfile),
            blogs: computed(()=> AppState.blogs)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>