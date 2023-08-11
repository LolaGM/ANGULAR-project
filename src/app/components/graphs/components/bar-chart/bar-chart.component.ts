import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

import { ChartsService } from '../../services/charts.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent  {

  @ViewChild('europePopulationCanvas') europePopulationCanvas!: ElementRef;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.chartsService.getCountries().subscribe(
      (countries: Country[]) => { 
        const europeCountries = countries.filter((country) =>
          country.region === 'Europe'
        );
        const countryLabels = europeCountries.map(
          (country) => country.name.common
        );
        const populationData = europeCountries.map(
          (country) => country.population
        );

        const canvas = this.europePopulationCanvas.nativeElement;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          this.setupEuropePopulationChart(
            ctx,
            countryLabels,
            populationData
          );
        } else {
          console.error('Canvas context is null.');
        }
      },
      (error) => {
        console.error('Error getting population data:', error);
      }
    );
  }

  setupEuropePopulationChart(
    ctx: Chart,
    labels: string[],
    data: number[]
    ): void {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'European population in millions',
            data: data,
            backgroundColor: '#0275d8',
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                family: 'Kanit, sans-serif',
                weight: 'bold',
                size: 18,
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              font: {
                family: 'Kanit, sans-serif',
                size: 10, 
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value: string | number) {
                return typeof value === 'number' ? value.toLocaleString() : value;
              },
              font: {
                family: 'Kanit, sans-serif',
                size: 12,
                weight: 'bold',

              }
            }
          }
        }
      }
    });
    
  }
}
