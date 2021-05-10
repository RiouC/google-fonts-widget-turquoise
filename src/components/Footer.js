const Footer = ({ darkMode, setDarkMode }) => {
    return (
        <footer className={
            darkMode
                ? "p-3 text-center bg-dark text-white border-top border-white"
                : "p-3 text-center bg-dark text-white"}>
          Team Turquoise with &#9775; ,
          <span style={{color: "#27EC27"}}>&#9752;</span>
          &#8523; <span style={{color: "cyan"}}>&#9883;</span> for Alyra
        </footer>
    );
};

export default Footer;
