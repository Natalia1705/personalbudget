import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">BugdetApp</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="data:image/jpeg;base64,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"
            alt="avatar"
            className="avatar"
          />
        </li>
        <li className="listItem">Natalia</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};