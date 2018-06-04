$(function() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        type: 'pie',
        // color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /**
     * 饼图
     */
    var chart1 = echarts.init(document.getElementById('main1'))
    // var chart1 = echarts.init(document.getElementById('main1'), 'light')
    // var chart1 = echarts.init(document.getElementById('main1'), 'dark')
    chart1.setOption({
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                // 依次设置颜色
                // color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
                // roseType: 'angle',  // 通过半径表示数据的大小。



                // 鼠标 hover 时候的高亮样式。
                // emphasis: {
                //     itemStyle: {
                //         // 高亮时点的颜色。
                //         color: 'blue',
                //         shadowBlur: 200,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     },
                //     label: {
                //         show: true,
                //         // 高亮时标签的文字。
                //         formatter: 'This is a emphasis label.'
                //     }
                // },

                data:[
                    {value:5, name:'衬衫',itemStyle: {color: 'gray'}},
                    {value:20, name:'羊毛衫'},
                    {value:36, name:'雪纺衫'},
                    {value:10, name:'裤子'},
                    {value:10, name:'高跟鞋'},
                    {value:20, name:'袜子'}
                ],
                // 浅色标签 字变色
                // label: {
                //     textStyle: {
                //         color: 'green'
                //     }
                // }
                // 视觉引导线的颜色
                labelLine: {
                    lineStyle: {
                        color: 'blue'
                    }
                }
            }
        ],
        // 深色背景
        // backgroundColor: '#2c343c',
        // 浅色标签 字变色
        // textStyle: {
        //     color: 'rgba(255, 255, 255, 0.3)'
        // }
    })
})