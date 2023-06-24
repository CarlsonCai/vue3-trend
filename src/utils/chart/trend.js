const trend = {
  grid: {
    left: '5%',
    top: '35%',
    right: '5%',
    bottom: '18%'
  },
  textStyle: {
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
  xAxis: [
    {
      position: 'top',
      type: 'category',
      min: 0,
      max: 90,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        formatter: () => {},
        margin: 25
      },
      axisPointer: {
        show: false
      },
      boundaryGap: false
    }
  ],
  yAxis: [
    {
      min: -100,
      max: 100,
      axisLabel: {
        show: false // 隱藏 y 軸刻度線和標籤
      },
      splitLine: {
        show: false // 隱藏 y 分隔線
      },
      axisTick: {
        show: false // 隱藏 y 軸刻度線
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
    },
    {
      type: 'line',
      showSymbol: false,
      animation: false,
      data: [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100
      ],
      areaStyle: {
        opacity: 0.1,
        color: 'white'
      },
      lineStyle: {
        color: 'transparent'
      }
    },
    {
      type: 'line',
      showSymbol: false,
      animation: false,
      data: [
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100,
        -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100
      ],
      areaStyle: {
        opacity: 0.1,
        color: 'black' // 設定區域的顏色為藍色
      },
      lineStyle: {
        color: 'transparent'
      }
    }
  ],
  visualMap: {
    show: false,
    pieces: [
      {
        gt: 0,
        lte: 1000,
        color: '#30989c'
      }
    ],
    outOfRange: {
      color: '#e6a417'
    }
  },
  graphic: [
    {
      type: 'line',
      shape: {
        x1: 0,
        y1: 0
      },
      z: 1000,
      style: {
        lineWidth: 1,
        stroke: 'red'
      },
      keyframeAnimation: [
        {
          duration: 2000,
          loop: true,
          keyframes: [
            {
              percent: 0,
              style: {
                opacity: 1
              }
            },
            {
              percent: 0.1,
              style: {
                opacity: 1
              }
            },
            {
              percent: 0.2,
              style: {
                opacity: 0
              }
            },
            {
              percent: 0.3,
              style: {
                opacity: 0
              }
            },
            {
              percent: 0.4,
              style: {
                opacity: 0
              }
            },
            {
              percent: 0.5,
              style: {
                opacity: 0
              }
            },
            {
              percent: 0.6,
              style: {
                opacity: 1
              }
            },
            {
              percent: 1,
              style: {
                opacity: 1
              }
            }
          ]
        }
      ]
    }
  ]
}
export default trend
