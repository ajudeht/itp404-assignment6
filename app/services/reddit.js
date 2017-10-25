import Ember from 'ember';

export default Ember.Service.extend({

  findAllForSubreddit(subreddit){

    var subredditURL = 'https://www.reddit.com/r/' + subreddit + '.json';
    return fetch(subredditURL);

  }

});
