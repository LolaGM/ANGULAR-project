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
    this.chartsService.getEuropeanCountries().subscribe(
      (countries: Country[]) => { 
        const countryLabels = countries.map(
          (country) => country.name.common
        );
        const populationData = countries.map(
          (country) => country.population
        );
  
        const canvas = this.europePopulationCanvas.nativeElement;
        const ctx = canvas.getContext('2d');
  
        if (ctx) {
          this.createEuropePopulationChart(
            ctx,
            countryLabels,
            populationData
          );
        } else {
          console.error('Canvas context is null.');
        }
      },
    );
  }
  
  createEuropePopulationChart(
    ctx: CanvasRenderingContext2D,
    labels: string[],
    data: number[]
  ): void {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'European Population',
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
              },
              color: '#01539A' 
            }
          }
        },
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
              }
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#01539A',
              font: {
                family: 'Kanit, sans-serif',
                size: 10,
                weight: 'bold',
              },
              maxRotation: 0,
              minRotation: 0, 
              autoSkip: false, 
              padding: 10,
              callback: function (value: string | number) {
                return typeof value === 'number' ? value.toLocaleString() : value;
              }
            }
          }
        }
      }
    });
  }
}