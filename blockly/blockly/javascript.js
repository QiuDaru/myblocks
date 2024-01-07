Blockly.JavaScript['threeblockly'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var settings = {
  "url": "https://beta-nft.townway.com.tw/mint",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "uuid_project": "00000000",
    "uuid_task": "00000000",
    "address": "0xE5b3c06873D4C2da2598b67535331A12a0cCc3f4",
    "contract": "",
    "callback": "https://beta-nft.townway.com.tw/uri/ning",
    "image": "https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1650873918786.jpg",
    "description": "神奇海螺",
    "name": "神奇海螺",
    "attributes": [
      {
        "trait_type": "等級",
        "value": "2"
      },
      {
        "trait_type": "神奇指數",
        "value": "3"
      },
      {
        "trait_type": "出貨時間",
        "value": "2024/1/7"
      }
    ]
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
  return settings;
};