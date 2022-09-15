/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
 var quoteArray = [
    {
        "quote": "The Way Get Started Is To Quit Talking And Begin Doing",
        "name": "Walt Disney"
    },
    {
        "quote": "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
        "name": "Winston Churchill"
    },
    {
        "quote":"Don't Let Yesterday Take Up Too Much Of Today.",
        "name":"Will Rogers",
        "citation":"book"
    },
    {
        "quote":"You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character.",
        "name":"Unknown",
        "year":"2016"
    },
    {
        "quote":"It's Not Whether You Get Knocked Down, It's Whether You Get Up.",
        "name":"Vince Lombardi"
    }, 
    {
        "quote":"We May Encounter Many Defeats But We Must Not Be Defeated",
        "name":"Steve Jobs"
    }
]

/***
 * `getRandomQuote` function
***/
function randomquote(){
   let random= Math.floor(Math.random()* (quoteArray.length));
   return quoteArray[random];
}



/***
 * `printQuote` function
***/



// quoteArray.quote=randomquote();
// quoteArray.name=randomquote();
function getquote(){
    let a = randomquote();
    let quotedisplay = document.getElementById("quote-box");
    var stringquote = '<p class="quote">' 
                      + a.quote + '</p>'
                      + '<p class="source">'
                      +a.name;
    if (a.hasOwnProperty('citation')){
        stringquote += '<span class="citation">' + a.citation + '</span>';
    }
    if(a.hasOwnProperty('year')){
        stringquote += '<span class="year">' + a.year + '</span>';
    }
    stringquote += '</p>';
    
    quotedisplay.innerHTML=stringquote;
       //console.log(quotedisplay);
            
        
        
    
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById("load-quote").onclick= function (){
    getquote();
}