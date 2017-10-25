import Ember from 'ember';

export default Ember.Component.extend({

  loading : true,
  failed : false,
  posts : [],
  didReceiveAttrs() {

      console.log("sr: ", this.model.subreddit);

        var subredditURL = 'https://www.reddit.com/r/' + this.model.subreddit + '.json';

        if (this.model.subreddit == null){

        } else {
          this.set("loading", true, true);

        fetch(subredditURL).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })).then(res => {
            console.log(res.status, res.data.data.children);
            this.set("loading", false, true);
            this.set("failed", false, true);
            this.set("posts", res.data.data.children, true);
        })

      ).catch((response)=>{

        this.set("loading", false, true);
        this.set("failed", true, true);

      });
}
  }
});
