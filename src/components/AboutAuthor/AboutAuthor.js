import { useMode } from "../../Hook/useMode";

export const AboutAuthor = ({ author }) => {
	const {mode} =useMode()
	return (
		<div className={mode}>
			<div style={{ marginTop: '50px' }}>
				<h3 className='single-book__author'>
					{author.first_name} {author.last_name}
				</h3>

				<p>{author.bio}</p>
			</div>
		</div>
	);
};
