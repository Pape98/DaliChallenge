var express = require('express');
var router = express.Router();

var profileData = require('../data/DALI_Data.json');
var helpers = require('../helpers/functions');


router.get('/', function (req, res, next) {
  var shuffledProfileData = helpers.shuffle(profileData);
  var selectedProfileData = shuffledProfileData.slice(0, 4);
  var friends = shuffledProfileData.slice(4, 7);
  var whoToFollow = shuffledProfileData.slice(7, 10);
  res.render('profile/index', {
    profileData: profileData,
    selectedProfileData: selectedProfileData,
    friends: friends,
    whoToFollow: whoToFollow
  });
});

module.exports = router;