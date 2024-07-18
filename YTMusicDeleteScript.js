// This JavaScript script can be used to quickly and automatically delete all your uploads to YouTube Music.
// 1. Go to your uploaded songs.
// 2. Open your browsers console.
// 3. Paste in this script and press enter.
// 4. Wait until all songs are deleted. This can be in the background while you other things.

// If this is not working:
// Some browsers don't allow pasting JavaScript into their console. If this is the case disable that safety feature or use a different browser.
// Make sure you are viewing the individual songs (not the albums): https://music.youtube.com/library/uploaded_songs
// Make sure your YouTube Music is in English or else change the variable searchWord in the settings below to what the word for delete is in your version of YouTube Music.
// If you internet or PC is not fast enough consider lowering the intervalBetweenSteps variable to a higher value. This will slow down the script.
// If the script still is not working. Leave a comment under the YouTube video tutorial and then I will reply with help or fix the script.

// Settings for user
var searchWord = "Delete";// Set this variable to the word(s) used by Youtube Music in the delete button. In English this is "Delete" but in Dutch it would be "verwijder". Keep in mind that this is case sensitive.
var intervalBetweenSteps = 400;// The time between each steps in miliseconds. The total time per album will be 5 times this duration. If you have a slow computer or slow internet you might want to make this value higher to give each step more time, if you have a fast computer and internet you can make it smaller to delete the songs faster.
var albumsOrSongs = 0// If one is deleting the songs one by one (recommended) keep this at 0, else if one is deleting from the album page set this to 1.

// Script which does the deleting.
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

function deleteAlbumsWithOpening()
    {
        var stepZeroTimer = setInterval(stepZeroFunction,intervalBetweenSteps);       //OPEN ALBUM
        var stepOneTimer = setInterval(stepOneFunction,2*intervalBetweenSteps);       //CLICKS 3-dot MENU 
        var stepTwoTimer = setInterval(stepTwoFunction,3*intervalBetweenSteps);       //CLICKS DELETE
        var stepThreeTimer = setInterval(stepThreeFunction,4*intervalBetweenSteps);   //CLICKS OKAY

        function stepZeroFunction()
        {
            jQuery("ytmusic-item-section-renderer .ytmusic-item-thumbnail-overlay-renderer").eq(0).click();
			console.log("Zeroth step finished");
            clearInterval(stepZeroTimer);
        }

        function stepOneFunction()
        {
            jQuery(".dropdown-trigger").eq(albumsOrSongs).click()
			console.log("First step finished");
            clearInterval(stepOneTimer);
        }

        function stepTwoFunction()
        {
            for(let j = 2; j <= 10; j++) {
                if (jQuery(".ytmusic-menu-popup-renderer").eq(j).text().includes(searchWord)) {
                    jQuery(".ytmusic-menu-popup-renderer").eq(j).children().children().eq(0).click();
                    break;
                }
            }
			console.log("Second step finished");
            clearInterval(stepTwoTimer);
        }

        function stepThreeFunction() {
            jQuery("#main").children().eq(4).children().eq(2).children().children().eq(0).click();
			console.log("Third step finished");
            clearInterval(stepThreeTimer);
			console.log("Album deleted.")
        }
    }

console.log("Starting script");
var deleteAlbumsWithOpening = setInterval(deleteAlbumsWithOpening,5*intervalBetweenSteps);