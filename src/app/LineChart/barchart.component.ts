/**
 * Created by srinivasan on 23/04/17.
 */
import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import {Data} from '../../providers/sampledata';
@Component({
    selector: 'app-barchart',
    templateUrl: './barchart.component.html',
    styleUrls: ['./barchart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BarchartComponent implements OnInit, OnChanges {
    @ViewChild('chart') private chartContainer: ElementRef;
    @Input() private data: Array<any>;
    private margin: any = { top: 20, bottom: 20, left: 50, right: 20};
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private colors: any;
    private xAxis: any;
    private yAxis: any;
    private xkey: any;
    private ykey: any;
    private rangeStart : any = 100

    constructor(public dataService:Data) {
        this.xkey ="date";
        this.ykey="reading";
        this.data = this.dataService.getAll();
    }

    ngOnInit() {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    }

    ngOnChanges() {
        if (this.chart) {
            this.updateChart();
        }
    }

    createChart() {
        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        let svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);

        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        // define X & Y domains
        let xDomain = this.data.map(d => d[this.xkey]);
        let yDomain = [0, d3.max(this.data, d => d[this.ykey])];

        // create scales
        this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

       svg.append('line').attr("class","range").attr("x1",this.margin.left).attr("y1",this.margin.bottom + this.yScale(180)).attr("x2",this.width ).attr("y2", this.margin.bottom +this.yScale(180)).attr("stroke","Red").attr("stroke-width",2)
      svg.append('line').attr("class","range").attr("x1",this.margin.left).attr("y1",this.margin.bottom + this.yScale(200)).attr("x2",this.width ).attr("y2",this.margin.bottom + this.yScale(200)).attr("stroke","Green").attr("stroke-width",2)

        // bar colors
        this.colors = d3.scaleLinear().domain([0, this.data.length]).range(<any[]>['red', 'blue']);

        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
            .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
            .call(d3.axisLeft(this.yScale));
    }

    updateChart() {
        // update scales & axis
        this.xScale.domain(this.data.map(d => d[this.xkey]));
        this.yScale.domain([0, d3.max(this.data, d => d[this.ykey])]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(d3.axisBottom(this.xScale));
        this.yAxis.transition().call(d3.axisLeft(this.yScale));

        let update = this.chart.selectAll('.bar')
            .data(this.data);

        // remove exiting bars
        update.exit().remove();

        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', d => this.xScale(d[this.xkey]))
            .attr('y', d => this.yScale(d[this.ykey]))
            .attr('width', d => this.xScale.bandwidth())
            .attr('height', d => this.height - this.yScale(d[this.ykey]))
            .style('fill', (d, i) => this.colors(i));

        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => this.xScale(d[this.xkey]))
            .attr('y', d => this.yScale(0))
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', (d, i) => this.colors(i))
            .transition()
            .delay((d, i) => i * 10)
            .attr('y', d => this.yScale(d[this.ykey]))
            .attr('height', d => this.height - this.yScale(d[this.ykey]));
    }
}
