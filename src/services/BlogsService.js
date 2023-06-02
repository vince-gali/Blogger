import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

    async getBlogs(){
        AppState.blogs = []
        const res = await api.get('api/blogs')
        logger.log('what are the blogs', res.data)
        AppState.blogs  = res.data.map(b => new Blog(b))
    }

    async getBlogsByProfile(id){
        AppState.blogs=[]
        const res = await api.get('/api/blogs/', {
            params: {
                creatorId:id
            }
        })
        AppState.blogs = res.data.map(b => new Blog(b))
    }
}

export const blogsService = new BlogsService()