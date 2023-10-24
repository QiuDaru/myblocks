var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "uuid": "00000000",
  "address": "0xE5b3c06873D4C2da2598b67535331A12a0cCc3f4",
  "image": "https://cc.tvbs.com.tw/img/upload/2022/05/20/20220520170357-1298d211.jpg",
  "description": "Froot print IoT device",
  "name": "Webduino",
  "attributes": [
    {
      "trait_type": "name",
      "value": "99"
    },
    {
      "trait_type": "temperature",
      "value": "99"
    },
    {
      "trait_type": "humidity",
      "value": "50"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://beta-nft.townway.com.tw/mint_with_metadata", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));