$(document).ready(function() {

    function getQuote() {
        var quotes = [{
            quote: "こんにづは！",
            name: "こんにちは！"
        }, {
            quote: "どんだんだば！",
            name: "なんてことだ！"
        }, {
            quote: "わいは！",
            name: "(驚いた時の感嘆詞)"
        }, {
            quote: "まんずな！",
            name: "そうだよね！"
        }, {
            quote: "あずましいじゃ！",
            name: "気持ちいいね！"
        }, {
            quote: "まいね、まいね！",
            name: "ダメ、ダメ！"
        }, {
            quote: "ぉんろ〜！",
            name: "あら〜！"
        }, {
            quote: "どうしちゃば！",
            name: ""
        }, {
            quote: "なんぼめごこだば！ ",
            name: "なんて可愛い子だね！"
        }, {
            quote: "じょんばけつ",
            name: "出っ張ったおしり"
        }, {
            quote: "腹チェじゃ！",
            name: "お腹いっぱい！"
        }, {
            quote: "もつけだはんで！",
            name: ""
        }, {
            quote: "あっちゃ！",
            name: "お母さん！"
        }, {
            quote: "いーいーいー！",
            name: "あーあーあー！"
        }, {
            quote: "いがめんち！",
            name: "イカの足(ゲソ)を細かく刻んで油で揚げたり焼いたりした郷土料理"
        }, {
            quote: "いだわしい！",
            name: "もったいない！"
        }, {
            quote: "けっ！",
            name: "食べなさい！"
        }, ];

    var sourceLength = quotes.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    for (var i=0; i<=sourceLength; i++) {
      var newQuoteText = quotes[randomNumber].quote;
      var newQuoteName = quotes[randomNumber].name;
    }
    
    var timeAnimation = 200;
    var quoteContainer = $("#quoteContainer");
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteName">' + newQuoteName + '</p>');
        quoteContainer.fadeIn(timeAnimation);
      }); //end of fadeOut
    } //end of getQuote
getQuote();
  
$("#quoteButton").click(getQuote);

}); //end of document.ready