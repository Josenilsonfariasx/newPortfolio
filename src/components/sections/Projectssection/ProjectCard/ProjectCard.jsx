import git from '../../../../assets/git-icon.png'

export const ProjectCard = ({name, description, link}) => {
	
	return (
		<li>
			<div>
				<h3 className="title3">{name}</h3>
				<p className="paragraph">{description}</p>
				<a className="link" href={link} target='_blank'>Saiba mais</a>
			</div>
			<img src={git} alt={name} />
		</li>
	)

}