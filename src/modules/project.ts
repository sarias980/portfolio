
export default class Project {

    constructor(title: string, description: string, ghLink: string, imgPath: string) {
        this.imgPath = imgPath;
        this.title = title;
        this.description = description;
        this.ghLink = ghLink;
    }

    imgPath: string;
    title: string;
    description: string;
    ghLink: string;
}
