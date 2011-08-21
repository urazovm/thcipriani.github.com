$(function() {
  var ctx = $("canvas")[0].getContext("2d");

  ctx.canvas.height = 200;
  ctx.canvas.width = 200;
  ctx.fillStyle = "#fd841f";

  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI*2, true);
  ctx.fill();
});
