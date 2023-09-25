var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();


request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);

    var name ="";
    var region ="";
    var subregion="";
    var population ="";
    for(var x in result){
        console.log(result[x].name);
        console.log(result[x].region);
        console.log(result[x].sub-region);
        console.log(result[x].population);
    }
    
}