import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            data : this.props.data, 
            labels : this.props.labels
        };
        console.log("In graph-class")
        console.log(this.state.data)
        console.log(this.state.labels)

    }

    createGraphData(){
        const chartData = {
            labels: this.state.labels,
            datasets: [
                {
                label: 'Renters rente',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.data
                }
            ]
        }
        return chartData
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }

    

    render(){
        let data = this.createGraphData()
        console.log(data)
        return(
            <div>
            <Line ref="chart" height={5} width={10} data={data} />
            </div>
        )
    }
}
export default Graph

