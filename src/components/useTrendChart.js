import * as echarts from 'echarts'
import trendConfig from '@/utils/chart/trend'
import { iconsDesc } from '@/utils/soccer'
import { deepClone } from '@/utils/common'

export default function useTrendChart() {
  let chart = null
  let themeMode = ''
  let option = deepClone(trendConfig)
  let iconMinTemp = {
    1: [],
    2: []
  }
  let isOverTime = false

  const renderChart = (el, mode) => {
    chart = echarts.init(el, null, { renderer: 'svg', devicePixelRatio: 2.5 })
    themeMode = mode
    setTrendTheme()
  }

  const setTrendTheme = () => {
    if (themeMode === 'darkGreenMode') {
      option.series[1].areaStyle.color = '#ffffff'
      option.series[2].areaStyle.color = '#000000'
      option.xAxis[0].axisLabel.color = '#ffffff'
    } else {
      option.series[1].areaStyle.color = '#dedede'
      option.series[2].areaStyle.color = '#dedede'
      option.xAxis[0].axisLabel.color = '#6e6e6e'
    }
  }

  const updateChart = data => {
    if (data.isOverTime || data.data.length >= 120) isOverTime = true
    fillData(data, data.isEnd, data.isPenalty)
    clearGraphic()
    updateData(data.data)
    setAxisLabel(data.isHt, data.isEnd, data.data.length, isOverTime)
    setLine(data.isHt, data.isEnd, data.data.length, isOverTime)
    updateEvent(data.events)
    if (!data.isEnd) updateBreathingLine(data.data.length)
    if (data.isEnd || data.isHideBreathingLine) hideBreathingLine()
  }

  const updateData = data => {
    for (var i = 0; i < data.length; i++) {
      option.series[0].data[i] = data[i]
    }
    option.series[1].data = Array(option.series[0].data.length).fill(100)
    option.series[2].data = Array(option.series[0].data.length).fill(-100)
    option.xAxis[0].max = option.series[0].data.length
    chart.setOption(option)
  }

  const updateBreathingLine = min => {
    const x = min >= 90 ? min - 1 : min
    const y = 50
    option.graphic[0].shape.y1 = getSplitLineHeight() / 2
    option.graphic[0].position = getCurrentMinPos(x, y)
    chart.setOption(option)
  }

  const hideBreathingLine = () => {
    option.graphic[0].shape.y1 = 0
    chart.setOption(option)
  }

  const setAxisLabel = (isHt, isEnd, min, isOverTime) => {
    const formatter = (value, index) => {
      const axisLabel = [0, 15, 30, 45, 60, 75, 90]
      if (isOverTime) {
        axisLabel.push(105)
        axisLabel.push(120)
      }
      if (min > 90 && isEnd) axisLabel.push(min)
      const isShow = axisLabel.includes(index)
      if (isHt && `${index}` === '45') return `{red|HT}`
      if (isEnd && `${index}` === '105' && min === 105) return `{red|105’}`
      if (isEnd && `${index}` === '120' && min === 120) return `{red|120’}`
      if (isEnd && `${index}` === `${axisLabel[axisLabel.length - 1]}`)
        return `{red|${axisLabel[axisLabel.length - 1]}’}`
      if (isShow) return `${value}’`
    }
    const rich = {
      red: {
        color: '#ff3d33'
      }
    }
    option.xAxis[0].axisLabel.formatter = formatter
    option.xAxis[0].axisLabel.rich = rich
    chart.setOption(option)
  }

  const setLine = (isHt, isEnd, min, isOverTime) => {
    let Line = [
      {
        value: 0,
        color: themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: false,
        isShow: true
      },
      {
        value: 15,
        color: themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: false,
        isShow: true
      },
      {
        value: 30,
        color: themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: false,
        isShow: true
      },
      {
        value: 45,
        color: isHt ? '#ff3d33' : themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: isHt ? true : false,
        isShow: true
      },
      {
        value: 60,
        color: themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: false,
        isShow: true
      },
      {
        value: 75,
        color: themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: false,
        isShow: true
      },
      {
        value: 90,
        color: isEnd && min <= 90 ? '#ff3d33' : themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: isEnd && min <= 90 ? true : false,
        isShow: true
      },
      {
        value: 105,
        color: isEnd && min === 105 ? '#ff3d33' : themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: isEnd && min === 105 ? true : false,
        isShow: isOverTime ? true : false
      },
      {
        value: 120,
        color: isEnd && min === 120 ? '#ff3d33' : themeMode === 'darkGreenMode' ? '#ffffff' : '#dedede',
        isLongLine: isEnd && min === 120 ? true : false,
        isShow: min >= 120
      },
      {
        value: min,
        color: '#ff3d33',
        isLongLine: true,
        isShow: min > 90 && isEnd ? true : false
      }
    ]

    Line.forEach(item => {
      createdLine(item.value, item.color, item.isLongLine, item.isShow)
    })
  }

  const createdLine = (min, lineColor, isLongLine, isShow) => {
    const chartDom = chart.getDom()
    const chartHeight = chartDom.offsetHeight
    const lineHeight = getSplitLineHeight()
    const longLineHeight = (chartHeight - lineHeight) / 2 + lineHeight
    const position = isLongLine ? getCurrentMinPos(min, 165) : getCurrentMinPos(min)

    const graphic = {
      type: 'line',
      shape: {
        x1: 0,
        y1: isShow ? (isLongLine ? longLineHeight : lineHeight) : 0
      },
      z: 1,
      position: position,
      style: {
        lineWidth: 1,
        stroke: lineColor
      }
    }
    option.graphic.push(graphic)
    chart.setOption(option)
  }

  const updateEvent = events => {
    events.forEach(element => {
      const isShowIcon = [1, 2, 3, 4, 8, 15, 17].includes(element.type)
      if (isShowIcon) setEventIcon(element.minute, element.actor, element.type)
    })
    chart.setOption(option)
  }

  const setEventIcon = (minute, actor, type) => {
    const min = evaluateExpression(minute)
    iconMinTemp[actor].push(min)
    const length = getSameMinIconLength(iconMinTemp[actor], min)
    const gap = length * 6
    const [xAxisPos, yAxisPos] = getCurrentMinPos(min)
    const position =
      actor === 1 ? [xAxisPos - 6 + gap, yAxisPos - 18] : [xAxisPos - 6 + gap, yAxisPos + getSplitLineHeight() + 5]

    const isCard = ['黄牌', '红牌'].includes(iconsDesc[type].desc)

    const graphic = {
      type: 'image',
      position: position,
      z: 0,
      style: {
        image: iconsDesc[type].outline_icon,
        width: isCard ? 10 : 12,
        height: 12
      }
    }
    option.graphic.push(graphic)
  }

  const fillData = (data, isEnd, isPenalty) => {
    const dataLen = data.data.length
    const eventsMin = data.events.length > 0 ? Number(data.events[data.events.length - 1].minute) : 0
    if (eventsMin > dataLen && (isPenalty || isEnd)) {
      const nums = eventsMin - dataLen + 10
      for (let i = 0; i < nums; i++) {
        data.data.push(0)
      }
    }
  }

  const evaluateExpression = expression => {
    if (expression.includes('+')) {
      const [num1, num2] = expression.split('+')
      return parseInt(num1) + parseInt(num2)
    } else {
      return parseInt(expression)
    }
  }

  const clearGraphic = () => {
    iconMinTemp = {
      1: [],
      2: []
    }
    const defaultGraphic = option.graphic[0]
    option.graphic = [defaultGraphic]
  }

  const getSameMinIconLength = (array, target) => {
    let count = array.reduce((accumulator, currentValue) => {
      if (currentValue === target) {
        return accumulator + 1
      } else {
        return accumulator
      }
    }, 0)
    return count - 1 <= 0 ? 0 : count - 1
  }

  const getCurrentMinPos = (X, Y = 100) => {
    const xAxisPos = chart.convertToPixel({ xAxisIndex: 0 }, X)
    const yAxisPos = chart.convertToPixel({ yAxisIndex: 0 }, Y)
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
