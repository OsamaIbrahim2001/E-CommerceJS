function visitingUser(page){
    var user=localStorage.getItem("user");
if(!(user=="exit")){
    window.open("../HTML/tgroba.html","_blank")
}
else{
    window.open(page.id,"_self")
}
}