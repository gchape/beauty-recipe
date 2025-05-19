import { Button, Card, Container } from "react-bootstrap";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <Container className="d-flex gap-5 mt-5">
      <Card
        className={`shadow ${styles.productCard}`}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src="" alt="asdasdasd"/>
        <Card.Body>
          <Card.Title>ბარათი</Card.Title>
          <Card.Text>Lorem ipsum dolor sit.</Card.Text>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className={`shadow ${styles.productCard}`}>
        <h1>ბარათი</h1>
      </Card>
      <Card className={`shadow ${styles.productCard}`}>
        <h1>ბარათი</h1>
      </Card>
    </Container>
  );
}
