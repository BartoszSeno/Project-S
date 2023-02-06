const LoginInformation = ({ items }) => {
  return (
    <>
      {items.map((user) => (
        <div className="user-box">
          <div className="user-count">User: {user.id}</div>
          <div className="user-login">Login: {user.login}</div>
          <div className="user-password">Password: {user.password}</div>
        </div>
      ))}
      <div className="description">
        <p>Users are being written out from the json file.</p>
        <p>Unfortunately, the register does not add new users.</p>
        <p>You have to take my word that's everything works.</p>
        <p>but by the free host it is impossible.</p>
        <p className="link">
          <a href="https://github.com/BartoszSeno/jsonapi-user" target="_blank">
            HERE
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginInformation;
