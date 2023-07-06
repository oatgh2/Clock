const padLeft = (value, length, padChar) => {
  value = String(value);
  padChar = padChar || '0';

  while (value.length < length) {
    value = padChar + value;
  }

  return value;
}

const refreshClock = () => {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  const grausSecPointer = 360 / 60 * sec;
  


  const grausMinPointerPerMin = 6;
  const grausMinPointerPerSec = 0.1;
  let grausMinPointer = ((min * grausMinPointerPerMin) + (sec * grausMinPointerPerSec));
  

  const grausHourPointerPerHour = 30;
  const grausHourPointerPerMin = 0.5;
  const grausHourPointerPerSeg = 0.5 / 60;

  let grausHourPointer = ((hour * grausHourPointerPerHour) + (min * grausHourPointerPerMin) + (sec * grausHourPointerPerSeg));
  


  const secPointer = document.getElementsByClassName('sec')[0]
  const minPointer = document.getElementsByClassName('min')[0]
  const hourPointer = document.getElementsByClassName('hour')[0]

  const digitalSec = document.getElementsByClassName('digitalSec')[0]
  const digitalMin = document.getElementsByClassName('digitalMin')[0]
  const digitalHours = document.getElementsByClassName('digitalHours')[0]

  digitalSec.textContent = padLeft(sec, 2, 0)
  digitalMin.textContent = padLeft(min, 2, 0)
  digitalHours.textContent = padLeft(hour, 2, 0)

  console.log(`Sec: ${grausSecPointer}`)
  console.log(`Min: ${grausMinPointer}`)
  console.log(`Hours: ${grausHourPointer}`)

  secPointer.style.transform = `rotate(${grausSecPointer}deg)`
  minPointer.style.transform = `rotate(${grausMinPointer}deg)`
  hourPointer.style.transform = `rotate(${grausHourPointer}deg)`
}



document.addEventListener("DOMContentLoaded", () => {
  setInterval(refreshClock, 1000);

  document.getElementsByClassName('configPill')[0].addEventListener("click", (e) => {
    e.currentTarget.style.display = 'none';
  })
})