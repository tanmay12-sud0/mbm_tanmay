import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import ArticleCard from './ArticleCard'

function HomePageCards() {
    return (
        <>
        <br />
          <br />
          <br />
        <div >
           <Container>
               <h1 style={{fontSize:"40px", color:"red"}}>
                LATEST NEWS
            </h1>
            
           </Container>
          <Container>
          <Row>
        
        <Col>
        <ArticleCard desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia" key={1} />
        
        </Col>
        <Col>
        <ArticleCard desc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia" key={2}/>
        </Col>
        <Col>
        <div >
        <Card  style={{ width: '18rem', border:"1px solid black" }}>
        <Card.Title style={{display:"flex", justifyContent:"center", color:"red", fontSize:"30px", marginTop:"10px" }}>Campus highlights</Card.Title>
        <hr />
  <Card.Img variant="top" src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png" />
  <Card.Body>
    <Card.Title style={{display:"flex", justifyContent:"center", color:"red", fontSize:"20px", marginTop:"5px" }} >Mr. Andrew Mied</Card.Title>
    <Card.Title style={{display:"flex", justifyContent:"center", color:"black", fontSize:"12px", marginTop:"5px" }} >BE Second Year, CSE</Card.Title>
    <hr style={{color:"red"}} />
    <Card.Text style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:"13px"}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto,
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
        
        </Col>
      </Row>
          </Container>
          <br />
          <hr />
        </div>
        </>
    )
}

export default HomePageCards
