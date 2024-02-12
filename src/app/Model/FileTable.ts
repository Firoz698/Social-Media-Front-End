export class FileTable{
    constructor(){
        this.Id = 0;
        this.UserId=0;
        this.image = null;
        this.Title="";
        this.description= "";
        this.imageSrc="";
    }
    Id : number;
    UserId:number;
    image: any;
    Title:string;
    description: string;
    imageSrc: string;
}