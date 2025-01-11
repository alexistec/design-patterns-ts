/**
 * ! Prototype Pattern:
 * 
 * It is a creational design pattern that allows us to copy existing objects
 * without making the code dependent on their classes.
 * 
 * this is useful when we want to duplicate the content 
 * title, and author of a document , for example, or any comple object.
 * 
 * https://refactoring.guru/design-patterns/prototype
 */


class Document {
    public title: string;
    private content: string;
    public author: string;



    constructor(title : string, content: string, author:string){
        this.title = title;
        this.author= author;
        this.content= content;
    }

    clone():Document {
        return new Document(this.title, this.content, this.author);
    }

    displayInfo() {
        console.log(
            `
                Title : ${this.title}
                Content : ${this.content}
                Author : ${this.author}
            `
        )
    }
}


function main(){
    
    const documentOne = new Document('Price', 'five hundred dollars ','Alexis');
    console.log({ documentOne });
    documentOne.displayInfo();


    const document2 = documentOne.clone();
    document2.title = 'New price';

    console.log({ document2 });
    document2.displayInfo();

}

main()