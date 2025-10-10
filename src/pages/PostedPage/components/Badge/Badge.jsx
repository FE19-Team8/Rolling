import clsx from 'clsx';

const Badge = ({ relationship }) => {
  const baseStyle = 'rounded text-sm px-2';
  const styles = {
    지인: 'text-beige500 bg-beige100',
    가족: 'text-green500 bg-green100',
    친구: 'text-blue500 bg-blue100',
    동료: 'text-purple600 bg-purple100',
  };
  const classes = clsx(
    baseStyle,
    styles[relationship] || 'bg-gray200 text-gray800',
  );

  return <span className={classes}>{relationship}</span>;
};

export default Badge;
