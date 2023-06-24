<template>
  <div class="container">
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useTrendChart from './useTrendChart'

const { renderChart, updateChart } = useTrendChart()
const chartContainer = ref(null)

onMounted(() => {
  renderChart(chartContainer.value, 'darkGreenMode')
  updateChart({
    data: [
      100, 46, -74, -46, -80, 12, -78, 68, 60, -26, 16, 4, -20, -34, -100, -26, 100, 48, -48, 76, -42, -32, 36, 0, -58,
      -78, 32, 100, 100, -8, -100, 72, 100, 0, 30, -4, -94, -8, -12, 74, 100, -44, 32, 100, -10, -64, -82, -38, 100,
      100, 22, -10, 0, -100, 44, -84, -12, 36, 42, 10, 6, 40, 42, 24, -34, -48, -36, 28, -56, -30, -28, 42, -100, 50
    ],
    events: [
      {
        type: 2,
        actor: 1,
        minute: '9'
      },
      {
        type: 3,
        actor: 1,
        minute: '14'
      },
      {
        type: 2,
        actor: 2,
        minute: '16'
      },
      {
        type: 2,
        actor: 1,
        minute: '28'
      },
      {
        type: 1,
        actor: 1,
        minute: '41'
      },
      {
        type: 2,
        actor: 1,
        minute: '44'
      },
      {
        type: 3,
        actor: 2,
        minute: '49'
      },
      {
        type: 2,
        actor: 1,
        minute: '50'
      },
      {
        type: 1,
        actor: 2,
        minute: '53'
      },
      {
        type: 3,
        actor: 1,
        minute: '72'
      }
    ],
    isHideBreathingLine: false,
    isHt: true,
    isEnd: false,
    isOverTime: true,
    isPenalty: true
  })
})
</script>

<style>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #373b44;
  background: -webkit-linear-gradient(to right, #4286f4, #373b44); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4286f4, #373b44);
}
.chart-container {
  background-color: rgb(35, 64, 96);
  width: 80%;
  height: 150px;
}
</style>
