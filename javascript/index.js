var modal = document.querySelector('q');

var myDetails =[
    `if you really want to work with me than feel free to contact me :)
`,
'Feel free to contact me ',
'I love making new friend',
'I work in peace',
'Beyond programming cricket is my passion'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var detailTag = document.querySelector('.detail');
setInterval(
    ()=>{
        var getMyDetailsFromMyDetails = getRandomInt(myDetails.length);
        detailTag.textContent=myDetails[getMyDetailsFromMyDetails];
    },
    1000
)

