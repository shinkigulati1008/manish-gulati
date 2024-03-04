import backgroundImg from '../../../assets/bg-1.webp';
interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  container: {
    background: `url(${backgroundImg.src}) center/cover no-repeat fixed`,
    padding: '80px 0', // Adjust padding as needed
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
    height: '100%',
    padding: '20px',
    width: '90%',
    margin: "0 auto"
  },
  swiperSlide: {
    position: 'relative',
    width: '100%',
    height: 'auto', // Set a fixed height for the SwiperSlide
    display: 'flex', // Hide content overflow
    justifyContent: 'center',
    padding: '20px',
  },
  content: {
    maxHeight: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-wrap',
    flexGrow: 1,
    marginBottom: 2,
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
  swiperButtonNext: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.9)',
    },
  },
  swiperButtonPrev: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    background: 'red',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'red',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

export default styles;
