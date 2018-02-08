I use ajax to parse the json file. After reading each valid data, I push its information to an array called tweets.
Then I use loadData(tweets,startIndex,len) function to bind data into 5 divs (and there are only 5 divs in HTML file).
Tweets is all tweets data, startIndex is where to start loading Tweets, and len is length of tweets array.
StartIndex is used to manage animation.
The logic of animation is like this:
    - fadeOut the first div
    - put the 2nd div contents to the 1st div, put the 3rd div contents to the 2nd div...
    - load a new content from array and put it in the 5th div
    - hide the 5th div and immediately fadeIn it (In order to make a fadeIn animation).

len parameter is used to handle loops. That means when there are no data in the array, go back and start from the first item in the array.
