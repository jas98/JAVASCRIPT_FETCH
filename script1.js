
let counter=0;
function fetcher(){
fetch('https://yesno.wtf/api')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }



        // Examine the text in the response
        response.json().then(function(data) {
		
		
		
        //console.log(data["image"]);
		if(counter==0){imageDisplayer(data["image"]);}
		else{ imageAJAX(data["image"]); }
		
		
		//textDisplayer(data["answer"]);
		counter++;
        });
		
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
	}
		document.getElementById("btn1").onclick =()=>{fetcher();}
	fetcher();
	
	
	function textDisplayer(src){
     
  document.getElementById("text1").innerHTML=src;}
	
	function imageDisplayer(src){
	  var x = document.createElement("IMG");
  x.setAttribute("src", src);
  x.setAttribute("width", "404");
  x.setAttribute("height", "328");
  document.getElementById("demo").appendChild(x);
	}
	
	function imageAJAX(src){
	const img=document.querySelector("img");
	img.setAttribute("src", src);
	}
