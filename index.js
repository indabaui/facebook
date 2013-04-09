var inProduction = (window.location.hostname.indexOf('indabamusic.com') > -1);
var appId = inProduction ? '193676690667198' : '131183633621066';
var channelUrl = inProduction ? '//beta.indabamusic.com/channel.html' : '//beta.indavelopment.com/channel.html';

window.fbAsyncInit = function() {
  FB.init({
    appId      : appId,
    channelUrl : channelUrl,
    status     : true,
    xfbml      : true
  });

  // do more stuff here
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
