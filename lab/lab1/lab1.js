$(document).ready(function() {
    var tweets = [];
    // get json file
    $.ajax({
        type: "GET",
        url: "TwitterTweets17.json",
        dataType: "json",
        success: function(responseData, status){
            var len = responseData.length; // number of Tweets
            var actualLen = 0; // number of Tweets - wrong data
            $.each(responseData, function(i, item) {
                if (item.created_at != null) {
                    var oneTweet = {"screen_name": item.user.screen_name, "timestamp": item.created_at, "text": item.text, "img": item.user.profile_image_url, "img_exist": true};
                    tweets.push(oneTweet);
                    // push the information of tweets into an array
                    actualLen ++;
                }

            });
            loadData(tweets,0,actualLen);
        }, error: function(msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

});

/**
    tweets: all tweets data
    startIndex: where to start loading Tweets
    len: length of tweets array
*/
function loadData(tweets,startIndex,len) {
    for (var i = 0; i < 5; i++) {
        var myIndex = (i+startIndex)%len; // In order to loop from the beginning

        // ------- This part of the code is used to avoid repeatedly loading 404 images
        if (i!=4 && document.querySelector('#item_'+(i+1)+' img').dataset.exist == "false") {
            $('#item_'+(i)+' img').attr("src","resources/user.png");
            document.querySelector('#item_'+(i)+' img').dataset.exist = false;
        } else {
            document.querySelector('#item_'+(i)+' img').dataset.exist = true;
            $('#item_'+(i)+' img').attr("src",tweets[myIndex].img);
        }
        // ------- This part of the code is used to avoid repeatedly loading 404 images

        $('#item_'+(i)+' h5').text(tweets[myIndex].screen_name);
        $('#item_'+(i)+' .date').text(tweets[myIndex].timestamp);
        $('#item_'+(i)+' .mb-0').text(tweets[myIndex].text);
    }

    // used to start animation. see readme for details
    setTimeout(function () {
        $('#item_0').fadeOut(500);
        setTimeout(function () {
            loadData(tweets,startIndex+1,len);
            $('#item_0').show();
            $('#item_4').hide();
            $('#item_4').fadeIn(500);
        },600);
    },3000);
}
