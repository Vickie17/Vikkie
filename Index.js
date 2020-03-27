/*Stores the name Ugochukwu Ebere Victoria with the variable, nameMe */
let nameMe = "Ugochukwu Ebere Victoria";
/* Displays the name Ugochukwu Ebere Victoria on the console */
 console.log("My name is: " + nameMe);
/*Stores my courses in the array, courses */
let courses = ["HTML","CSS","JS"];

for(let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

if(courses.length % 2!=0){
    for(let i=1; i<=200; i++){
        if(i%2!=0){
            console.log(i+",");
        }
    }
}