const config = {
  xAxis: [
    {
      position: 'top',
      type: 'category',
      min: 0,
      max: 90,
      splitLine: {
        show: true
      },
      axisTick: {
        length: 0
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 14
      },
      axisPointer: {
        show: false
      },
      boundaryGap: false
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: -100,
      max: 100,
      axisLabel: {
        formatter: ''
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      emphasis: {},
      areaStyle: {
        opacity: 1
      },
      lineStyle: {
        color: 'transparent'
      },
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    }
  ],
  visualMap: {
    show: false,
    pieces: [
      {
        gt: 0,
        lte: 1000,
        color: '#e6a417'
      }
    ],
    outOfRange: {
      color: '#30989c'
    }
  },
  graphic: {
    type: 'line',
    shape: {
      x1: 0,
      y1: 0
    },
    position: [0, 0],
    z: 100,
    style: {
      lineWidth: 1,
      stroke: 'red'
    },
    cursor: 'auto',
    emphasis: null,
    keyframeAnimation: [
      {
        duration: 1000,
        loop: true,
        keyframes: [
          {
            percent: 0.5,
            scaleX: 0
          },
          {
            percent: 1,
            scaleX: 1
          }
        ]
      }
    ]
  }
}
export default config
