//jshint esversion:6

$(document).ready(function() {
  $("input").val("0");
});

const filRate = 0.45;
const chuRate = 0.7;
const usageRate = 520;

$("button").click(function() {
  location.reload();
});

$("input").change(function () {
  summa();
})

function summa() {
  var rev = [];
  var mon = parseFloat($('input[name="monRev"]').val());
  var tue = parseFloat($('input[name="tueRev"]').val());
  var wed = parseFloat($('input[name="wedRev"]').val());
  var thu = parseFloat($('input[name="thuRev"]').val());
  var fri = parseFloat($('input[name="friRev"]').val());
  var sat = parseFloat($('input[name="satRev"]').val());
  var sun = parseFloat($('input[name="sunRev"]').val());
  var fil = parseFloat($('input[name="fillet"]').val());
  var chu = parseFloat($('input[name="chunks"]').val());
  rev.push(mon);
  rev.push(tue);
  rev.push(wed);
  rev.push(thu);
  rev.push(fri);
  rev.push(sat);
  rev.push(sun);
  var dayNum = 0;
  var toCut = [];
  for (var i = 0; i < rev.length; i++) {
    if (rev[i] != 0) {
      dayNum++;
    }
  }
  var totalInv = fil / filRate + chu / chuRate;
  var totalRev = mon + tue + wed + thu + fri + sat + sun;
  var totalSalmon = ((totalRev / usageRate) * 2) / filRate;
  var toOrder = ((totalSalmon - totalInv) / (dayNum - 1)).toFixed(1);
  for (var y = 0; y < rev.length; y++) {
    if (rev[y] != 0  && rev[y + 1] != 0) {
      toCut.push(toOrder);
    } else {
      toCut.push("NaN");
    }
  }
  $("#toCutMon").html(toCut[0]);
  $("#toCutTue").html(toCut[1]);
  $("#toCutWed").html(toCut[2]);
  $("#toCutThu").html(toCut[3]);
  $("#toCutFri").html(toCut[4]);
  $("#toCutSat").html(toCut[5]);
  $("#sumOrder").html((totalSalmon-totalInv).toFixed(1));
  console.log(toCut);
}
