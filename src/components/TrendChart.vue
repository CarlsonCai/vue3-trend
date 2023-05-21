<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useTrendChart from './useTrendChart'

const { renderChart, updateChart } = useTrendChart()
const chartContainer = ref(null)
let wsData = { min: 0, data: 0 }

onMounted(() => {
  renderChart(chartContainer.value)
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 201) - 100
    wsData.data = randomNumber
    updateChart(wsData)
    wsData.min++
  }, 3000)
})
</script>

<style>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
