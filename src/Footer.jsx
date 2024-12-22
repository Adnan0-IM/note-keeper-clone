

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>All rights reserved &copy; {date}</p>
    </footer>
  );
}

export default Footer;
