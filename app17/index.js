var curquote = {};
var db = new Dexie('TalkingQOD');
// Define a schema
db.version(1).stores({
    quotes: 'id, category, author, quote'
});


// Open the database
db.open().catch(function(error) {
    alert('Uh oh : ' + error);
});




$("#getQOD").on("click", function() {
    $("#quote").text("");

    $.get("https://quotes.rest/qod.json", function(response) {
        curquote = response.contents.quotes[0];
        $("#quote").append(response.contents.quotes[0].quote);
    });
});

$("#btnSay").on("click", function() {
    say($("#quote").text());
});

$("#btnSave").on("click", function() {
    db.quotes.add({
        id: curquote.id,
        category: curquote.category,
        author: curquote.author,
        quote: curquote.quote
    });
});

$("#btnGet").on("click", saveQuotes);

function say(strText) {
    var msg = new SpeechSynthesisUtterance(strText);
    window.speechSynthesis.speak(msg);
};

function saveQuotes()
{
    $(".saved").empty();
    // $(".saved").remove();
    db.quotes.each(function(quote)
    {
        var clone = $("#template").clone();
        clone.text(quote.quote);
        clone.attr("id", quote.id);
        $("body").append(clone);
        //$("#saved").append(quote.quote);
        });
    }
