function highlight() {
    //Write your code here
	let strongTag = document.getElementsByTagName("strong");
    for(t of strongTag){
    t.style.color = "green"; 
    }


}


function return_normal() {
    //Write your code here
	let strongTag = document.getElementsByTagName("strong");
    for(t of strongTag){
    t.style.color = "black"; 
    }

    
}