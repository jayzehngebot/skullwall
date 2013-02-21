
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Skullwall' });
};

exports.drawing = function(req, res){
  res.render('drawing', { title: 'SkullwallDraw' });
};