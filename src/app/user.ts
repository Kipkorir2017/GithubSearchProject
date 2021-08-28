export class User {
    constructor(public avatar_url:string,
        public followers:number,
        public following:number,
        public repos_url:string,
        public  bio:string,
        public location:string,
        public created_at:Date
        ){

    }
}
