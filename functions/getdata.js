const express = require('express');
const serverless = require('serverless-http'); // Use serverless-http for Lambda functions

const app = express();
const router = express.Router();

// Data for media list
const mediaList = {  "list": [
  {
    "image": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1534126511673-b6899657816a",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1533514114760-4fa81101f90c",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1547658717-dac392a4f9e9",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1504198458649-3128b9327fcf",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "tag": "motivition",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1470115636492-6d2b56f04eaf",
    "tag": "political",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1527191711875-2080fbf63d14",
    "tag": "day_special",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "tag": "sad",
    "type": "video"
  },
  {
    "image": "https://images.unsplash.com/photo-1472457897821-70d3819a0e24",
    "tag": "love",
    "type": "image"
  },
  {
    "video": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "tag": "sad",
    "type": "video"
  }
] };

// Data for tags
const tags = { "tags":[
        "all", "day_special", "love", "sad","motivation","new","political"
    ]};

// Define routes
router.get('/media-list', (req, res) => res.json(mediaList));
router.get('/tags', (req, res) => res.json(tags));

app.use('/api', router);

// Export handler
module.exports.handler = serverless(app);
