import React from "react";

function FormattedDate(props)
{
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {date: new Date()};

		fdc3.addContextListener("fdc3.task", (context) =>
		{
			FSBL.Clients.Logger.info("Task has been removed:  " + JSON.stringify(context));
		});
	}

	componentDidMount()
	{
		this.timerID = setInterval(() => this.tick(),1000);
	}

	componentWillUnmount()
	{
		clearInterval(this.timerID);
	}

	tick()
	{
		this.setState({
			date: new Date()
		});
	}

	render()
	{
		return (
			<div>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}

export default Clock;
