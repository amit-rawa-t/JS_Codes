//Stack is primitive and heap is non-primitive

let youtubename = "amitrawat";
anothername = youtubename;
anothername = "geeli";

console.log(youtubename);
console.log(anothername);

let userone = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let usertwo = userone;

usertwo.email = "amitrawat@google.com"

console.log(userone.email);
console.log(usertwo.email);


