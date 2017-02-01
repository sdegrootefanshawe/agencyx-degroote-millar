var aboutcontact = [
    {content: "<div class='team row'><h2 class='text-center'>Meet the team!</h2><div class='medium-3 column'><a><img class='team-photo hvr-float' id='garett_photo' src='images/garett.jpg'></a> </div><div class='medium-3 column'><a><img class='team-photo hvr-float' id='stephen_photo' src='images/stephen.jpg'></a></div><div class='medium-3 column'><a><img class='team-photo hvr-float' id='jacob_photo' src='images/jacob.jpg'></a></div> <div class='medium-3 column'><a><img class='team-photo hvr-float' id='travis_photo' src='images/trevor.jpg'></a></div></div><div class='row'><h1 class='column text-center' id='name'>We are Pixel&sup2;</h1><p class='column text-center' id='about'>A team of developers driven by innovation and progression. In our modern day media landscape, being current just isn’t enough. You need to be ahead of the curve to earn the attention of your audience. Our methods of action and proven abilities allow us to stay ahead of that curve, and to drive the audience and the consumer to you.No project is too big or too small for our highly skilled team of designers and developers. From e-commerce to corporate representation and everything in between, we can accommodate you. What makes us better than other agencies? We provide more for our clients by creating a revolutionary service that will get your competition talking. Adequate is not in our vocabulary–but fantastic is. Not only does Pixel&sup2; design, develop, test, and maintain for our clients but we also pride ourselves in our market research and leading industry trends. With more than 10 years of experience, we ensure that our products look and function better than the rest.</p></div>"},
    {content: "<div id='contactcontainer' class='row'><form method='post'><label for=''>Name:</label><input name='name' type='text'><label for=''>Company:</label><input name='company' type='text'><label for=''>Email:</label><input name='email' type='text'><label for=''>Message</label><textarea name='msg' cols='30' rows='10'></textarea><input class='button column' id='button' type='submit' value='Send'></form></div>"}
];

var htmlArea = document.querySelector("#swapper");
var link = document.querySelectorAll(".navigation");

function swapIt(e) {
    target = document.querySelector("#" + e.target.id);
    if (target.id == 'home') {} else if (target.id == 'contact') {
        htmlArea.innerHTML = aboutcontact[1].content;
    } else {
        htmlArea.innerHTML = aboutcontact[0].content;
    }
}

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', swapIt, false);
}
