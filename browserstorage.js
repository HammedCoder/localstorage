// cookies


document.cookie="name=John; expires=Tue, 16 Dec 2022 12:00:00 GMT; path=/test"; 

function deleteCookie(name){
  document.cookie("name="+name+"; expires=Tue, 06 Dec 2021 12:00:00 GMT; path=/test"); 
  
  setTimeout(() => {
    alert("Fire!")
    deleteCookie("John");
    
  }, 3000); 
}

document.cookie = "userDetail="+JSON.stringify(
  "name", "john",
  "age", "12"
);