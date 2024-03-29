const HtmlIcon = ({width, height, color}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-html5"
    width={width ? width : '100'}
    height={height ? height : '100'}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke={color ? color : 'CurrentColor'}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
    <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
  </svg>
  )
};

export { HtmlIcon };
