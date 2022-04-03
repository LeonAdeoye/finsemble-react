import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";

class ToDo extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			tasks: [{ name: "Play Chess with Horatio.", status: 2 },
				{ name: "Read at least one chapter from the book Dune.", status: 1 }]
		};
	}

	addTask = (taskName) =>
	{
		const previousTasks = this.state.tasks;
		FSBL.Clients.Logger.info("Added new task: " + taskName);


		const snoozeAction = new FSBL.Clients.NotificationClient.Action();
		snoozeAction.buttonText = "Snooze";
		snoozeAction.type = FSBL.Clients.NotificationClient.ActionTypes.SNOOZE;
		snoozeAction.milliseconds = 300000;

		this.setState({tasks: previousTasks.concat([{name: taskName, status: 1}])}, () =>
		FSBL.Clients.NotificationClient.notify({
			source: "To Do App",
			title: "Added a new task",
			details: "Details: " + taskName,
			actions: [snoozeAction]
		}));
	}

	clearTasks = () =>
	{
		FSBL.Clients.Logger.info("Clearing all " + this.state.tasks.length + " tasks.");
		this.setState({tasks: []});
	}

	removeTask = (task) =>
	{
		FSBL.Clients.Logger.info("Removing task:  " + task.name);
		const result = this.state.tasks.filter((taskToRemove) => taskToRemove.name !== task.name && taskToRemove.status !== task.status);
		this.setState( {tasks: result});
	}

	updateStatus = (task) =>
	{
		FSBL.Clients.Logger.info("Updating task:  " + task.name + " to status: " + task.status);
		task.status = task.status + 1;
		const result = this.state.tasks.map(taskToUpdate => (taskToUpdate.name === task.name) ? task : taskToUpdate);
		this.setState({tasks: result});
	}

	render()
	{
		return (
			<div>
				<AddNewTask tasks={this.state.tasks} addTask={(taskName) => this.addTask(taskName)} clearTasks={this.clearTasks}/>
				<TaskList tasks={this.state.tasks} removeTask={(task) => this.removeTask(task)} updateStatus={(task) => this.updateStatus(task)}/>
			</div>
		);
	}
}

export default ToDo;
