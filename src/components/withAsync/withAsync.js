const withAsync = (Component) => (props) => {
  if (props.isLoading) {
    return "Loading...";
  }
  if (props.error) {
    return props.error.message
  }
  return <Component {...props} />;
};

export default withAsync;
