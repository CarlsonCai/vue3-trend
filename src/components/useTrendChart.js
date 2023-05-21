import * as echarts from 'echarts'
import config from './config'

export default function useTrendChart() {
  let chart = null
  let option = config

  const renderChart = el => {
    chart = echarts.init(el)
    chart.setOption(option)
  }

  const updateChart = data => {
    option.graphic.shape.y1 = getSplitLineHeight()
    option.graphic.position = getCurrentMinPos(data.min + 1)
    option.series[0].data[data.min] = data.data
    chart.setOption(option)
  }

  const getCurrentMinPos = min => {
    const xAxisPos = chart.convertToPixel({ xAxisIndex: 0 }, min)
    const yAxisPos = chart.convertToPixel({ yAxisIndex: 0 }, 100)
    return [xAxisPos, yAxisPos]
  }

  const getSplitLineHeight = () => {
    const yAxis = chart.getModel().getComponent('yAxis')
    const splitLineExtent = yAxis.axis.getExtent()
    return splitLineExtent[1]
  }

  return {
    renderChart,
    updateChart
  }
}
