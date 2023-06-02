
export class Blog{
    constructor(data){
        this.name = data.name
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = false
        this.creatorId = data.creatorId
        this.creator = data.creator
    }

}



