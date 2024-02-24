import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}
function Avatar() {
	return <img className="avatar" img src="2025.jpg" alt="erhan bulut" />;
}
function Intro() {
	return (
		<div>
			<h1>Erhan Bulut</h1>
			<p>
				Full-stack web developer,Computer Science Engineer,Backend
				Developer,Mobile Developer. I can work all of software fields and I will
				be success.
			</p>
		</div>
	);
}
function SkillList() {
	return (
		<div className="skill-list">
			<Skill skill="React" emoji="💪" color="#123456" />
			<Skill skill="HTML + CSS" emoji="💪" color="orangered" />
			<Skill skill="JavaScript" emoji="💪" color="yellow" />
			<Skill skill="Angular" emoji="🛸" color="orange" />
			<Skill skill="Java" emoji="🏋️" color="blue" />
		</div>
	);
}
function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.color }}>
			<span>{props.skill}</span>
			<span>{props.emoji}</span>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
