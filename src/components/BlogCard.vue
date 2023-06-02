<template>

<div class="card row my-1">
       

       <div class="card-body d-flex">
           <div class="col-6">
            <router-link :to = "{name: 'Profile', params:{id:blogProp?.creatorId}}">
             <p @click="setActiveProfile()">Blog Created By: {{blogProp.creator.name}}</p>
             <img class="img-fluid rounded-circle blog-artist" :src="blogProp.creator.picture" :alt="blogProp.creator.name">
            </router-link>
             <h4>{{blogProp.title}}</h4>
             <p>{{blogProp.body}}</p>
           </div>
           <div class="col-4">

               <img class="img-fluid" :src="blogProp?.imgUrl" alt="img here">
           </div>
     </div>

     </div>

</template>


<script>
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';

export default {

    props: {
        blogProp: {type: Blog, required: true}
    },
    setup(props){
        return {
            setActiveProfile(){
                AppState.activeProfile = props.Blog
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.blog-artist{
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: cover;
}
</style>