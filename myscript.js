{
    addEventListener("keydown", function (event) {
        //page UP key
        if (event.keyCode == 33) {
            //get www.facebook.com/friends friend List
            let friends = document.getElementsByClassName("n1dktuyu");
            for (i=0; i<friends.length; i++) {

                //get 1 friend
                let friend = friends[i].getElementsByClassName("p8dawk7l ni8dbmo4");

                //if found
                if (friend.length > 0 ) {
                    //get "Mutual Friends" count
                    let string = friend[0].getElementsByClassName("ni8dbmo4");
                    let spacePos = string[0].innerHTML.indexOf(' ');
                    let friendsNum = string[0].innerHTML.substr(0,spacePos);

                    //if "Mutual Friends" count > 20 (or any other X)
                    if (friendsNum < 20) {
                        friends[i].parentNode.removeChild(friends[i]);
                    }
                } else {
                    //friends with 0 "Mutual Friends" go here
                    friends[i].parentNode.removeChild(friends[i]);
                }

            }
        }
    })
};
    