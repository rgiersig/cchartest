var dist = {
  Vorname : [
[161259, "Maria"],
[128311, "Franz"],
[124893, "Johann"],
[123847, "Josef"],
[84686, "Anna"],
[84440, "Elisabeth"],
[77436, "Michael"],
[74994, "Christian"],
[72680, "Thomas"],
[71902, "Peter"],
[70511, "Andreas"],
[68658, "Karl"],
[66272, "Christine"],
[60781, "Gerhard"],
[59769, "Martin"],
[53165, "Stefan"],
[52233, "Markus"],
[51380, "Walter"],
[50682, "Wolfgang"],
[49271, "Monika"],
[47727, "Herbert"],
[45571, "Elfriede"],
[45014, "Andrea"],
[43976, "Manfred"],
[42566, "Brigitte"],
[42265, "Robert"],
[42073, "Helmut"],
[41985, "Rudolf"],
[41355, "Alexander"],
[40236, "Helga"],
  ],
  Nachname : [
[35422, "Gruber"],
[33354, "Huber"],
[29475, "Bauer"],
[27303, "Wagner"],
[25098, "M&uuml;ller"],
[24295, "Steiner"],
[24085, "Pichler"],
[23296, "Moser"],
[22363, "Mayer"],
[21770, "Hofer"],
[21321, "Berger"],
[20735, "Leitner"],
[19895, "Fuchs"],
[19071, "Eder"],
[18148, "Fischer"],
[17548, "Schmid"],
[17392, "Winkler"],
[16977, "Weber"],
[16745, "Schneider"],
[16738, "Schwarz"],
[16630, "Maier"],
[15400, "Reiter"],
[14592, "Mayr"],
[14487, "Schmidt"],
[14117, "Brunner"],
[14105, "Baumgartner"],
[14051, "Lang"],
[13705, "Wimmer"],
[13677, "Egger"],
[13635, "Auer"],
  ],
};

var max = {};
$.each(dist, function(key, value) {
  var sum = 0;
  $.each (value, function (index, val) {
    sum += val[0];
  });
  max[key] = sum;
});

function generate_one (type) {
  var r = Math.floor(Math.random() * (max[type]+1));
  var d;
  $.each(dist[type], function(i, val) {
    if (r <= 0) { // }) {
      return false;
    }
    d = val[1];
    r -= val[0];
  });
  return d;
}

function generate (num) {
  var res = [];
  for (var i = num; i>0; i--) {
    var one = {};
    $.each(dist, function (key, value) {
      one[key] = generate_one(key);
    });
    res.push(one);
  }
  return res;
}
