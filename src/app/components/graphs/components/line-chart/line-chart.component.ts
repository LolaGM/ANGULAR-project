import { Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from '../../services/charts.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  @ViewChild('areaChartCanvas') areaChartCanvas!: ElementRef;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.chartsService.getEuropeanCountries().subscribe(
      (countries) => {
        const countryLabels = countries.map((country) => country.name.common);
        const areaData = countries.map((country) => this.calculateCountryArea(country));

        this.createCountryAreaChart(
          this.areaChartCanvas.nativeElement.getContext('2d'),
          countryLabels,
          areaData
        );
      },
      (error) => {
        console.error('Error getting country data:', error);
      }
    );
  }

  calculateCountryArea(country: any): number {
    if (country.borders && Array.isArray(country.borders)) {
      return country.borders.length * 1000;
    } else {
      return 0; 
    }
  }
  

  createCountryAreaChart(
    ctx: Chart,
    labels: string[],
    data: number[]
  ): void {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Country Area',
            data: data,
            borderColor: '#0275d8',
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false 
            },
            ticks: {
              color: '#01539A',
              font: {
                family: 'Kanit, sans-serif',
                size: 10,
                weight: 'normal',
              },
            }
          },
          y: {
            grid: {
              display: false 
            },
            beginAtZero: true,
            ticks: {
              color: '#01539A',
              font: {
                family: 'Kanit, sans-serif',
                size: 10,
                weight: 'bold',
              },
              maxRotation: 0,
              autoSkip: false,
              callback: function (value: string | number) {
                return typeof value === 'number' ? value.toLocaleString() : value;
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                family: 'Kanit, sans-serif',
                weight: 'bold',
                size: 14,
              },
              color: '#01539A' 
            }
          }
        }
      }
      
    });
  }
}
