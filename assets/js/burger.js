"use strict";

export default class burger {

    constructor(elementID){
        let ElDiv = document.querySelector(elementID);
        let creatEl = document.createElement("span");

        ElDiv.appendChild(creatEl);
        console.log(ElDiv);

    }

    setCss(){
        
    }




}