import backgroundImg from '../../../assets/bg-1.webp';
interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  container: {
    background: `url(${backgroundImg.src}) center/cover no-repeat fixed`,
    padding: '80px 0',
    textAlign: 'center',
  },
  title: {
    marginBottom: '40px',
  },
  swiperContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    padding: '20px',
    width: '100%',
    margin: "0 auto"
  },
  author: {
    marginTop: 2,
  },
  readMoreLink: {
    cursor: 'pointer',
    color: 'blue',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 2,
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
   avatar: {
    width: 56,
    height: 56,
    margin: '0 auto',
    marginBottom: 2,
  },
};

export default styles;
