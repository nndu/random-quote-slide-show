/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        "quote": "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.",
        "source": "Rick Warren"
    },
    {
        "quote": "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",
        "source": "Winston Churchill"
    },
    {
        "quote": "I am not afraid of storms, for I am learning how to sail my ship.",
        "source": "Louisa May Alcott",
        "citation": "Little Women"
    },
    {
        "quote": "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
        "source": "Bill Gates",
        "year": "2000"
    },
    {
        "quote": "Focusing your life solely on making a buck shows a certain poverty of ambition",
        "source": "Barack Obama",
        "citation": "Knox College Commencement Address",
        "year": "2005"
    },
    {
        "quote": "Stay Hungry. Stay Foolish.",
        "source": "Steve Jobs",
        "citation": "Speed in Stanford University",
        "year": "2005"
    },
    {
        "quote": "You only pass through this life once, you don't come back for an encore.",
        "source": "Elvis Presley"
    },
    {
        "quote": " Life is about making an impact, not making an income.",
        "source": "Kevin Kruse"
    }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let random = Math.floor(Math.random() * (quotes.length));
    return quotes[random];
}

/***
 * `printQuote` function
***/
function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    let quote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    var stringQuoteHTML = '<p class="quote">'
        + quote.quote + '</p>'
        + '<p class="source">'
        + quote.source;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if (quote.hasOwnProperty('citation')) {
        stringQuoteHTML += '<span class="citation">' + quote.citation + '</span>';
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if (quote.hasOwnProperty('year')) {
        stringQuoteHTML += '<span class="year">' + quote.year + '</span>';
    }
    
    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    stringQuoteHTML += '</p>';

    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    let quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = stringQuoteHTML;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById("load-quote").onclick = function () {
    printQuote();
}