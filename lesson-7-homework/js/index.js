var distance = Number(prompt("siz qancha masofaga sayohat qilmoqchisiz (km) "));

var onFoot = 1;
var bicycle = 20.1 / 3.6;
var car = 70 / 3.6;
var plane = 800 / 3.6;
var clock;
var minute;
var second;
var day;

var travelTime = (distance * 1000) / onFoot;

clock = (travelTime - (travelTime % 3600)) / 3600;
minute = ((travelTime % 3600) - (travelTime % 60)) / 60;
second = travelTime % 60;
day = (clock - (clock % 24)) / 24;

if (day > 0) {
  onFoot = `${day} kun,  ${clock} soat, ${minute} daqiqa, ${second} soniya`;
} else {
  onFoot = `  ${clock} soat, ${minute} daqiqa, ${second} soniya`;
}

travelTime = (distance * 1000) / bicycle;

clock = (travelTime - (travelTime % 3600)) / 3600;
minute = ((travelTime % 3600) - (travelTime % 60)) / 60;
second = travelTime % 60;
day = (clock - (clock % 24)) / 24;

if (day > 0) {
  bicycle = `${day} kun,  ${clock} soat, ${minute} daqiqa, ${second} soniya `;
} else {
  bicycle = `  ${clock} soat, ${minute} daqiqa, ${second} soniya `;
}

travelTime = (distance * 1000) / car;

clock = (travelTime - (travelTime % 3600)) / 3600;
minute = ((travelTime % 3600) - (travelTime % 60)) / 60;
second = travelTime % 60;
day = (clock - (clock % 24)) / 24;

if (day > 0) {
  car = `${day} kun,  ${clock} soat, ${minute} daqiqa, ${second} soniya `;
} else {
  car = `  ${clock} soat, ${minute} daqiqa, ${second} soniya `;
}

travelTime = (distance * 1000) / plane;

clock = (travelTime - (travelTime % 3600)) / 3600;
minute = ((travelTime % 3600) - (travelTime % 60)) / 60;
second = travelTime % 60;
day = (clock - (clock % 24)) / 24;

if (day > 0) {
  plane = `${day} kun,  ${clock} soat, ${minute} daqiqa, ${second} soniya `;
} else {
  plane = ` ${clock} soat, ${minute} daqiqa, ${second} soniya `;
}

alert(` agar siz piyoda sayohatga chiqsangiz ${onFoot}
 agar siz velosipedda sayohat qilsangiz ${bicycle} 
 agar siz mashinada sayohat qilsangiz ${car}
 agar siz samalyotda sayohat qilsangiz ${plane} vaqt sarflar ekansiz `);
