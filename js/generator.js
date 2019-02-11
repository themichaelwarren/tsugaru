$(document).ready(function() {

    function getQuote() {
        var quotes = [{
            quote: "こんにづは！"
        }, {
            quote: "どんだんだば！"
        }, {
            quote: "わいは！"
        }, {
            quote: "まんずな！"
        }, {
            quote: "あずましいじゃ！"
        }, {
            quote: "まいね、まいね！"
        }, {
            quote: "ぉんろ〜！"
        }, {
            quote: "どうしちゃば！"
        }, {
            quote: "なんぼめごこだば！ "
        }, {
            quote: "まのどんず　"
        }, {
            quote: "腹チェじゃ！"
        }, {
            quote: "もつけだはんで！"
        }, {
            quote: "あっちゃ！"
        }, {
            quote: "いーいーいー！"
        }, {
            quote: "いがめんち！"
        }, {
            quote: "いだわしい！"
        }, ];

        var sourceLength = quotes.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);

        for (var i = 0; i <= sourceLength; i++) {
            var newQuoteText = quotes[randomNumber].quote;
            var newQuoteName = quotes[randomNumber].name;
        }

        var timeAnimation = 200;
        var quoteContainer = $("#quoteContainer");
        quoteContainer.fadeOut(timeAnimation, function() {
            quoteContainer.html('');
            quoteContainer.append('<p>' + newQuoteText + '</p>');
            quoteContainer.fadeIn(timeAnimation);
        }); //end of fadeOut
    } //end of getQuote
    getQuote();

    $("#quoteButton").click(getQuote);

}); //end of document.ready