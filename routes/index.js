
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Skullwall' });
};

exports.drawing = function(req, res){
  res.render('drawing', { title: 'SkullwallDraw' });
};

exports.inspired = function(req, res){
  res.render('inspired', { title: 'Be Patient' });
};