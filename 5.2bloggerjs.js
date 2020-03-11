var post = 0;


function postFunction(){
    var text1 = document.getElementById("text1");
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");

    var text = text1.value

    post ++

    if(post==1){
        post1.innerHTML = text;
    }

    if(post==2){
        reply1.innerHTML = text;
    }

    if(post==3){
        reply2.innerHTML = text;
    }

}


function clearFunction(){
    post1.innerHTML = "" ;
    reply1.innerHTML = "" ;
    reply2.innerHTML = "" ;
    post = 0;
}