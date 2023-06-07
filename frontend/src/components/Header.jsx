import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>My Memo</h1>
        <button className={classes.button}>
          <img src="src/assets/newpost.png" />  
          Create
        </button>
      </header>
      <hr />
    </>
  );
}

export default Header;
