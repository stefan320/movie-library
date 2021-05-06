import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const key = "$2b$10$QTMZaMPzjv.J7fnQLPoQSOCkpB4W5lZ/cp4zX/CqZR6l3LZ1LzT.G";
    axios
      .get("https://api.jsonbin.io/v3/b/6093c87065b36740b92f4838/", {
        headers: {
          "X-Master-Key": key,
        },
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return <div className={styles.container}></div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Home);
