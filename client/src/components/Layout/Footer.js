import React from 'react'
import MadeWithLove from 'react-made-with-love'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		textAlign: 'center',
		marginTop: 10
	}
}

const Footer = ({ classes }) => (
	<div className={classes.root}>

		<MadeWithLove 
			by="Udit Dashore"
			emoji
			link="https://github.com/tanish36"
		/>
	</div>
)


export default withStyles(styles)(Footer)