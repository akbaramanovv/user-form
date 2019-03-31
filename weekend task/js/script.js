"use strict";

function Person(ad, soyad, yas, mail, id) {
    this.name = ad;
    this.surname = soyad;
    this.age = yas;
    this.email = mail;
    this.id = id
}

let personArray = [];

let ageArray = []

let personFullInfo = document.getElementById('mylist')

function validateForm() {

    let userName = document.forms["myForm"]["uname"].value;
    let userSurname = document.forms["myForm"]["usurname"].value;
    let userMail = document.forms["myForm"]["umail"].value;
    let userAge = document.forms["myForm"]["uage"].value;

    document.forms["myForm"]["uname"].value = "";
    document.forms["myForm"]["usurname"].value = "";
    document.forms["myForm"]["umail"].value = "";
    document.forms["myForm"]["uage"].value = "";

    let filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let year = (/(\d{4})-(\d{2})-(\d{2})/);

    if (userName == "" || !isNaN(userName) || userSurname == " " || !isNaN(userSurname) || userMail == " " || !isNaN(userMail) || !filter.test(userMail) || userAge == "" || !year.test(userAge)) {


        alert("Form is incorrect ")

    } else {
        var str = userAge;

        var patt1 = /[0-9]{4}/g;

        var myAge = str.match(patt1);

        let y = 2019 - myAge;

        ageArray.push(y);

        let PersonInfo = new Person(userName, userSurname, userAge, userMail,(personArray.length+1));

        personArray.push(PersonInfo);

        let print = " ";

        for (let i = 0; i < personArray.length; i++) {
            let c = i+1;
            print += "<li  class='list-group-item'>" +
            personArray[i].id + ". " +
                personArray[i].name +
                " " + personArray[i].surname +
                " - " + ageArray[i] +
                " -" + personArray[i].email +

                "</li>";

        }
        personFullInfo.innerHTML = print;
    }
    return false;
}
let deletedFromList = document.getElementById('mylist');


function SortBySurName(){
    personArray.sort(function (a,b)
    {
        let x= a.surname.toLowerCase();
        let y = b.surname.toLowerCase();
        if(x<y){
            return - 1;
        }
        if(x>y){
            return 1;
        }
        return 0 ;
    })
    console.log(personArray)
    
    let sortList = " ";

    for (let i = 0; i < personArray.length; i++) {

        let b = i + 1;

        sortList += "<li  class='list-group-item'>" +
            b + ". " +
            personArray[i].name +
            " " + personArray[i].surname +
            " - " + ageArray[i] +
            " -" + personArray[i].email +

            "</li>";
    }
    sortName.innerHTML = sortList;
}

function Delete() {

     let id = document.getElementById('delete').value;

   if(id>personArray.length || id =="" ||isNaN(id)){
    document.getElementById('delete').value = " ";
       alert("input is incorrect")
   }
   else{

    personArray.splice(id-1, 1)

   

   let stayInList = " ";

   for (let i = 0; i < personArray.length; i++) {

       

       stayInList += "<li  class='list-group-item'>" +
       personArray[i].id  + ". " +
           personArray[i].name +
           " " + personArray[i].surname +
           " - " + ageArray[i] +
           " -" + personArray[i].email +

           "</li>";
   }
   deletedFromList.innerHTML = stayInList;
   document.getElementById('delete').value = " ";

   return false;
}
}
let sortName = document.getElementById('mylist');

function SortByName(){
   personArray.sort(function (a,b)
   {
       let x= a.name.toLowerCase();
       let y = b.name.toLowerCase();
       if(x<y){
           return - 1;
       }
       if(x>y){
           return 1;
       }
       return 0 ;
   })
   console.log(personArray)
   
   let sortList = " ";

   for (let i = 0; i < personArray.length; i++) {

       

       sortList += "<li  class='list-group-item'>" +
       personArray[i].id + ". " +
           personArray[i].name +
           " " + personArray[i].surname +
           " - " + ageArray[i] +
           " -" + personArray[i].email +

           "</li>";
   }
   sortName.innerHTML = sortList;
}

function SortById(){
    personArray.sort(function (a,b)
    {
        let x= a.id;
        let y = b.id;
        if(x<y){
            return - 1;
        }
        if(x>y){
            return 1;
        }
        return 0 ;
    })
    console.log(personArray)
    
    let sortList = " ";
 
    for (let i = 0; i < personArray.length; i++) {
 
        
 
        sortList += "<li  class='list-group-item'>" +
        personArray[i].id + ". " +
            personArray[i].name +
            " " + personArray[i].surname +
            " - " + ageArray[i] +
            " -" + personArray[i].email +
 
            "</li>";
    }
    sortName.innerHTML = sortList;
 }

