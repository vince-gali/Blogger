export class Profile{
    constructor(data){
        this.id = data.id
        this.email = data.email
        this.name = data.name
        this.picture = data.picture
        this.bio = data.bio
        this.coverImg = data.coverImg
        this.github = data.github
        this.resume = data.resume
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creatorId   = data.creatorId
    }
        }