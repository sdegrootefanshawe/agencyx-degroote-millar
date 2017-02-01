var team = document.querySelectorAll(".team-photo");
var names = document.querySelector("#name");
var about = document.querySelector("#about");

function object(e) {
  var target = document.querySelector("#"+e.target.id);
  console.log(target.id);

    var pixelsquared = [
        {color: "#bc2437",name: "Garett MacLaren", about: "Garett is our in house researcher, stratigest, designer and front-end developer. Using his experience in public relations and content creation, Garett works hand in hand with clients during the development process to ensure that your digital dreams become reality."},
        {color: "#39bfc9",name: "Stephen DeGroote", about: "Stephen is our front end developer from the future. With his intuitive eye for design and an extensive knowledge of advanced coding techniques–he has the power to breathe life into your project."},
        {color: "#00589b",name: "Jacob Millar", about: "Jacob is our backend builder. Using his experience in PHP and MySQL he is able to create vast databases for any sort of project."},
        {color: "#dd7f26",name: "Travis Moore", about: "Travis is our visionary. The man with the plan and professional perfectionist. He works with our developers every step of the way ensuring our clients digital experience exceeds their expectations."},
        {name: "We are pixelsquared,", about: "A team of developers driven by innovation and progression. In our modern day media landscape, being current just isn’t enough. You need to be ahead of the curve to earn the attention of your audience. Our methods of action and proven abilities allow us to stay ahead of that curve, and to drive the audience and the consumer to you.No project is too big or too small for our highly skilled team of designers and developers. From e-commerce to corporate representation and everything in between, we can accommodate you. What makes us better than other agencies? We provide more for our clients by creating a revolutionary service that will get your competition talking. “Adequate” is not in our vocabulary–but “fantastic” is. Not only does pixelsquared design, develop, test, and maintain for our clients but we also pride ourselves in our market research and leading industry trends. With more than 10 years of experience, we ensure that our products look and function better than the rest."}
    ];

    if (target==garett_photo) {
      names.style.color = pixelsquared[0].color;
      names.innerHTML = pixelsquared[0].name;
      about.innerHTML = pixelsquared[0].about;
    }else if (target==stephen_photo) {
      names.style.color = pixelsquared[1].color;
      names.innerHTML = pixelsquared[1].name;
      about.innerHTML = pixelsquared[1].about;
    }else if (target==jacob_photo) {
      names.style.color = pixelsquared[2].color;
      names.innerHTML = pixelsquared[2].name;
      about.innerHTML = pixelsquared[2].about;
    }else if (target==travis_photo) {
      names.style.color = pixelsquared[3].color;
      names.innerHTML = pixelsquared[3].name;
      about.innerHTML = pixelsquared[3].about;
    }else {
      names.innerHTML = pixelsquared[4].name;
      about.innerHTML = pixelsquared[4].about;
    }
    reWireEvents();
}
function reWireEvents() {
  team = document.querySelectorAll(".team-photo");
  for (var i = 0; i < team.length; i++) {
      team[i].addEventListener('click', object, false);
  }
}
reWireEvents();
