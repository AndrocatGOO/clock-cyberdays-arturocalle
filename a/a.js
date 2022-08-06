
var getRemainingTime = (deadline) => {
  var now = new Date();
  remainTime = (new Date(deadline) - now + 1000) / 1000;
  remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2);
  remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
  remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
  remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime,
  };
};

var countdown = (deadline, elem, finalMessage) => {
  var el = document.getElementById(elem);

  var timerUpdate = setInterval(() => {
    var t = getRemainingTime(deadline);
    el.innerHTML = `<div><div class="container-number"><span class="number">0${t.remainDays}</span><span class="dospuntos">:</span><span>DIAS</span></div><div class="container-number"><span class="number">${t.remainHours}</span><span class="dospuntos">:</span><span>HORAS</span></div><div class="container-number"><span class="number">${t.remainMinutes}</span><span class="dospuntos">:</span><span>MINUTOS</span></div><div class="container-number"><span class="number">${t.remainSeconds}</span><span class="dospuntos"></span><span>SEGUNDOS</span></div></div>`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

// FECHA AQUI
countdown(
  "ago 14 2022 17:18:00 GMT-0500",
  "clock",
  "¡Ya Terminó!Puedes ver mas productos en promocion en la seccion de Ofertas"
);

