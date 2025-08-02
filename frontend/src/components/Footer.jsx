import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-5">
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} Swapnil Dhal / Todo List. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
