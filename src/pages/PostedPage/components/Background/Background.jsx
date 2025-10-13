import clsx from 'clsx';

const Background = ({ color = beige, imageURL }) => {
  const colorTheme = {
    beige: 'bg-beige200',
    blue: 'bg-blue200',
    purple: 'bg-purple200',
    green: 'bg-green200',
  };

  const backgroundStyle = imageURL
    ? {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(50%)',
      }
    : {};

  const classes = clsx(
    'min-h-screen w-full fixed z-[-1]',
    backgroundStyle,
    imageURL ? '' : colorTheme[color],
  );

  return <div className={classes} style={backgroundStyle} />;
};

export default Background;
