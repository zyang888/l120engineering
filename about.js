$("#content").css("margin-top", $("#header").css("height"));

let team_member = [
  {
    name: "Ironman",
    title: "Engineer",
    img: "images/ironman.png",
    description: "Genius, Billionaire, Playboy, Philanthropist",
  },
  {
    name: "Batman",
    title: "Engineer",
    img: "images/batman.png",
    description: "I am vengence, I am the night, I am Batman",
  },
  {
    name: "Hulk",
    title: "Engineer",
    img: "images/hulk.png",
    description: "Smash",
  },
  {
    name: "Thor",
    title: "Engineer",
    img: "images/thor.png",
    description: "I am a God",
  },
  {
    name: "Spiderman",
    title: "Engineer",
    img: "images/spiderman.png",
    description: "Coming from your friendly neighborhood Spider-Man!",
  },
  {
    name: "Captain America",
    title: "Engineer",
    img: "images/captain.png",
    description: "I CAN DO THIS ALL DAY.",
  },
];

team_member.forEach((item, i) => {
  $("#members").append(`
    <div class="teamcard" data-toggle="modal" data-target="#${item.name}">
    <img src="${item.img}" alt="${item.name}">
    <div class="overlay"></div>
    <div class="text">Details</div>
<h4>${item.name}</h4>
<p>${item.title}</p>
    </div>

    <!-- Modal -->
<div class="modal fade" id="${item.name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
${item.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-red" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `);
});
