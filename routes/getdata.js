

const express = require('express');
const router = express.Router();

// Data for media list
const mediaList = {
  "list": [
    {
      "image": "https://www.w3schools.com/w3images/lights.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/falls.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/nature.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/forest.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/mountains.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "tag": "Ankit",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/bridge.jpg",
      "tag": "political",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/snow.jpg",
      "tag": "day_special",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/sun.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/sea.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      "tag": "sad",
      "type": "video"
    },
    {
      "image": "https://www.w3schools.com/w3images/rocks.jpg",
      "tag": "love",
      "type": "image"
    },
    {
      "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "tag": "sad",
      "type": "video"
    }
  ]
};

// Data for tags
const tags = {
  "tags":[
        "all", "day_special", "love", "sad","motivation","new","political","Today"
    ]
}

// Endpoint to get media list
router.get('/medialist', (req, res) => {
  res.json(mediaList);
});

// Endpoint to get tags
router.get('/tags', (req, res) => {
  res.json(tags);
});

router.get('/doupdate', (req, res) => {
  res.json(true );
});


module.exports = router;
