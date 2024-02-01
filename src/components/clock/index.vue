<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
    <p class="text">欢迎来到我的空间</p>
    <p class="text">大道至简</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const time = ref("");
const date = ref("");

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  const cd = new Date();
  time.value =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  date.value =
    zeroPadding(cd.getFullYear(), 4) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getDate(), 2) +
    " " +
    week[cd.getDay()];
}

function zeroPadding(num: number, digit: number) {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
</script>

<style scoped lang="less">
#clock {
  margin-top: 60px;
  font-family: 'Share Tech Mono', monospace;
  color: var(--theme-color);
  transition: all .35s ease-in-out;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0);

  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }

  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }

  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
}</style>
