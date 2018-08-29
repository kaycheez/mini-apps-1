$(document).ready(function () {
  $('#submit-butt').click(handleButt);
});


// const fetch = function() {
//   $.ajax({
//     url: 'http://localhost:3000/json',
//     type: 'GET',
//     contentType: 'application/json',
//     success: function(data) {
//       console.log('get success' + data);
//     },
//     error: function(data) {
//       console.log('get error homie', data);
//     }
//   });
// };

const send = function(text) {
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    contentType: 'application/json',
    data: text,
    success: function(data) {
      createCsv(data);
    }, 
    error: function(data) {
      console.log('errorrr fooo');
    }
  });
};

const handleButt = function (e) {
  e.preventDefault();
  console.log($('#text').val());
  send(($('#text').val()));
};

const createCsv = function(json) {
  let finalText = [];
  let csvKeys = [];
  Object.keys(json).forEach((key) => {
    if(key !== 'children') {
      csvKeys.push(key);
    }
  });
  finalText.push(csvKeys.join(','));
  
  let compileData = function(obj) {
    let keyValues = [];
    for (let i = 0; i < csvKeys.length; i++) {
      keyValues.push(obj[csvKeys[i]]);
    }
    finalText.push(keyValues.join(','));
    if (obj.children.length > 0) {
      for (let j = 0; j < obj.children.length; j++) {
        compileData(obj.children[j]);
      }
    }
  };
  compileData(json);
  console.log(finalText);
  $('#csv').append(`<div>${finalText.join('<br>')}</div>`);
};