import { Component } from '@angular/core';

@Component({
  selector: 'simple-chart-example',
  template: `
    <style>
    .highcharts-figure,
    .highcharts-data-table table {
        min-width: 320px;
        max-width: 100%;
        margin: 1em auto;
    }
    chart{

        display: block;
        width: 100%;
    }
    #container{
        width:100%;
        height: 300px;
    }

    .highcharts-data-table table {
        font-family: Verdana, sans-serif;
        border-collapse: collapse;
        border: 1px solid #ebebeb;
        margin: 10px auto;
        text-align: center;
        width: 100%;
        max-width: 100%;
    }

    .highcharts-data-table caption {
        padding: 1em 0;
        font-size: 1.2em;
        color: #555;
    }

    .highcharts-data-table th {
        font-weight: 600;
        padding: 0.5em;
    }

    .highcharts-data-table td,
    .highcharts-data-table th,
    .highcharts-data-table caption {
        padding: 0.5em;
    }

    .highcharts-data-table thead tr,
    .highcharts-data-table tr:nth-child(even) {
        background: #f8f8f8;
    }

    .highcharts-data-table tr:hover {
        background: #f1f7ff;
    }

    </style>
    <div id="container">
        <chart [options]="options"></chart>
    </div>
    `,
})
export class AppComponent {
  constructor() {
    this.colors = ['#46ADE1', '#ECB88E', '#9BDAE9', '#3DCD58', '#D694A0'];
    this.options = {
      chart: {
        type: 'area',
        alignTicks: false,
      },
      accessibility: {
        description:
          'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.',
      },
      title: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.',
        },
      },
      yAxis: [
        {
          title: {
            text: 'Email sent',
            style: {
              color: this.colors[1],
            },
          },
          labels: {
            format: '{value}',
            style: {
              color: this.colors[1],
            },
          },
        },
        {
          // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: this.colors[2],
            },
          },
          title: {
            text: 'Ratings recieved',
            style: {
              color: this.colors[2],
            },
          },
        },
        {
          // Global rating axis
          tickInterval: 1,
          min: 1,
          max: 6,
          labels: {
            format: '{value} ',
            style: {
              color: this.colors[3],
            },
          },
          title: {
            text: 'Global rating',
            style: {
              color: this.colors[3],
            },
          },
          opposite: true,
        },
      ],

      tooltip: {
        shared: true,
      },
      plotOptions: {
        series: {
          pointStart: Date.UTC(2022, 0, 1),
          pointIntervalUnit: 'month',
        },
        area: {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      chartOptions: {
        yAxis: [
          {
            labels: {
              align: 'right',
              x: 0,
              y: -6,
            },
            showLastLabel: true,
          },
          {
            labels: {
              align: 'left',
              x: 0,
              y: -6,
            },
            showLastLabel: true,
          },
          {
            labels: {
              align: 'right',
              x: 0,
              y: 6,
            },
            showLastLabel: true,
          },
        ],
      },
      series: [
        {
          yAxis: 0,
          color: this.colors[1],
          name: 'Emails sent',
          data: [
            null,
            null,
            null,
            null,
            null,
            2,
            9,
            13,
            50,
            170,
            299,
            438,
            841,
            1169,
            1703,
            2422,
            3692,
            5543,
            7345,
            12298,
            18638,
            22229,
            25540,
            28133,
            29463,
            31139,
            31175,
            31255,
            29561,
            27552,
            26008,
            25830,
            26516,
            27835,
            28537,
            27519,
            25914,
            25542,
            24418,
            24138,
            24104,
            23208,
            22886,
            23305,
            23459,
            23368,
            23317,
            23575,
            23205,
            22217,
            21392,
            19008,
            13708,
            11511,
            10979,
            10904,
            11011,
            10903,
            10732,
            10685,
            10577,
            10526,
            10457,
            10027,
            8570,
            8360,
          ],
        },
        {
          yAxis: 1,
          color: this.colors[2],
          name: 'Ratings received',
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            1,
            5,
            25,
            50,
            120,
            150,
            200,
            426,
            660,
            863,
            1048,
            1627,
            2492,
            3346,
            4259,
            5242,
            6144,
            7091,
            8400,
            9490,
            10671,
            11736,
            13279,
            14600,
            15878,
            17286,
            19235,
            22165,
            24281,
            26169,
            28258,
            30665,
            32146,
            33486,
            35130,
            36825,
            38582,
            40159,
            38107,
            36538,
            35078,
            32980,
            29154,
            26734,
            24403,
            21339,
            18179,
            15942,
            15442,
            14368,
            13188,
            12188,
            11152,
            10114,
            9076,
            8038,
            7000,
          ],
        },
        {
          yAxis: 2,
          color: this.colors[3],
          name: 'Global ratings',
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            4,
            4,
            4,
            3,
            3,
            2,
            3,
            4,
            5,
            3,
            5,
            4,
            4,
            4,
            3,
            3,
            2,
            3,
            4,
            5,
            3,
            5,
            4,
            4,
            4,
            3,
            3,
            2,
            3,
            4,
            5,
            3,
            4,
            3,
            3,
            2,
            3,
            4,
            5,
            3,
            4,
            3,
            3,
            2,
          ],
        },
      ],
    };
  }
  options: Object;
  colors: string[];
}
