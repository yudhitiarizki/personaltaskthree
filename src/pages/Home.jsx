import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  return (
    <Stcontainer>
        <Header />
        <Layout>
        <Form />
        <List />
        </Layout>
    </Stcontainer>
    
  );
};

export default Home;
const Stcontainer= styled.div`
  padding: 10px
  font-family: 'Roboto', sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  min-height: 768px;
  background-image: url('https://images.unsplash.com/photo-1667334124908-8c607caed4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60')
`;
