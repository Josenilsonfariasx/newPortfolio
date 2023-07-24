import { projects } from "../../../../data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import styles from "./style.module.css"
export const ProjectList = () => {

	return (
		<section id="projects" className={styles.listSection}>
			<div className="container">
					<h2 className="title2">Projetos</h2>
				<ul className={styles.ul}>
					{projects.map(project =>
							<ProjectCard key={project.name} name={project.name} description={project.description} link={project.link}/>
					)}
				</ul>
			</div>
		</section>
	)
	
}