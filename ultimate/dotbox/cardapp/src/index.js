import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
const skills = [
	{
		skill: "HTML + CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Angular",
		level: "beginner",
		color: "#FF3B00",
	},
];
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
			{skills.map((skill) => (
				<Skill skill={skill.skill} color={skill.color} level={skill.level} />
			))}
		</div>
	);
}
function Skill({ skill, color, level }) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "👶"}
				{level === "intermediate" && "👍"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
