const ConditionalRendering = ({ isLoggedIn }) => {
  return <>{isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}</>;
};
export default ConditionalRendering;
