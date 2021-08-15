import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  paper: {
    padding: '10px',
    borderRadius: '50px',
    backgroundColor: 'rgb(249, 231, 159)',
    color: 'rgb(21, 67, 96)'
  },
  heading: {
    color: 'rgb(203, 67, 53)',
    textDecoration: 'none',
    fontWeight: 'lighter'
  },
  tag: {
      color: 'rgb(33, 47, 60)',
      fontWeight: "bold"
  },
  submit: {
    marginTop: '50px',
    display: 'flex',
    maxWidth: '30rem',
    marginBottom: '6rem'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transform: 'translate(-5%)',
    marginLeft: '10%'
  },
  tags: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100px'
  }
});