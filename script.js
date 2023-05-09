let harcer = [
  "Հայաստանի մայրաքաղաքը։",
  "Սարք որով կատարում են թվաբանկան գործողություններ",
  "Ո՞ր երկրում է գտնվում Սևանա լիճը",
  "Գարեգին ․․․",
];
let words = ["Երևան", "Հաշվիչ", "Հայաստան", "Նժդեհ"];
let bar = words[Math.floor(Math.random() * words.length)];
let index = words.indexOf(bar);
harc.innerHTML = harcer[index];

let y = 0;
function XaX() {
  for (let i = 0; i < bar.length; i++) {
    let nor = document.createElement("div");
    let tarer = document.createElement("div");
    tarer.append(bar[i]);
    nor.className = "kub";
    nor.append(tarer);
    glxavor.append(nor);
    // console.log(bar[i]);
    tarer.innerHTML = bar[i];
    tarer.style.display = "none";
    function forEnter() {
      if (txt.value.toUpperCase() == bar[i].toUpperCase()) {
        if (tarer.style.display != "block") {
          y++;
          tarer.style.display = "block";
          nor.style.border = "2px solid rgb(21, 255, 0)";
          console.log(y);
          RefreshWord();
        }
      }
    }
    btn.addEventListener("click", function () {
      forEnter();
    });
    document.addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        forEnter();
      }
    });
  }

  console.log(glxavor);
}
XaX();
console.log(bar.length);

function RefreshWord() {
  if (y == bar.length) {

    bar = words[Math.floor(Math.random() * words.length)];
    
    index = words.indexOf(bar);
    harc.innerHTML = harcer[index];
    glxavor.innerHTML = "";
    y = 0;
    XaX();
  }
}
