import { Col, Row } from "react-bootstrap";
import Banner from "../components/homePage/Banner";
import NavigationBar from "../components/homePage/Navbar";
import PostCard from "../components/homePage/PostCard";
import PostCategory from "../components/homePage/PostCategory";
import SideBar from "../components/homePage/SideBar";

const MainLayout = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner />
      <Row className="mx-1 mx-lg-5 px-1 px-lg-5 ">
        <PostCategory />
        <hr />
        <Col sm={12} lg={8} className="p-0">
          <PostCard />
        </Col>
        <Col sm={0} lg={4} className="p-0">
          <SideBar />
        </Col>
      </Row>
  
    </>
  );
};

export default MainLayout;
