import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { AutoComplete, Button, message } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className = 'homepage'>
    <Directory />
  </div>
);

export default HomePage;