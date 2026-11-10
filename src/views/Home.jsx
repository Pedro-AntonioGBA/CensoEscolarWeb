import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carrossel from '../components/Carrossel';
import { useEffect, useState } from 'react';
import escolasUrl from '../datasets/escolas.json?url';
const Home = () => {
  const [escolas, setEscolas] = useState([]);

  useEffect(() => {
    fetch(escolasUrl)
      .then(response => response.json())
      .then(dados => setEscolas(dados))
      .catch(erro => console.error(erro));
  }, []);
  const escolasPB = escolas.filter((escola)=> escola.SG_UF == 'PB').sort((a,b)=> b.QT_MAT_BAS - a.QT_MAT_BAS).slice(0,10);
  let itensCarrossel = [
    {
      srcImagem:
        'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Nossas Salas de aula',
      descricao:
        'Nos Institutos Federais você tem uma infraestrutura de laboratórios conformatável.',
    },
    {
      srcImagem:
        'https://images.unsplash.com/photo-1758270705031-ebd46917a454?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      titulo: 'Professores qualificados',
      descricao: 'Professores com pós-graduação.',
    },
  ];
  return (
    <>
      {/* Carrossel */}
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
      {/* Cards */}
      <Container className="mt-2">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>{escolasPB[0]?.NO_ENTIDADE}</Card.Title>
                <Card.Text>
                  Primeira Instituição de ensino com mais matrículas: {escolasPB[0]?.QT_MAT_BAS}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1778489769184-45868633c527?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>{escolasPB[1]?.NO_ENTIDADE}</Card.Title>
                <Card.Text>
                  Segunda Instituição de ensino com mais matrículas: {escolasPB[1]?.QT_MAT_BAS}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1661688307556-61310f23a42c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <Card.Body>
                <Card.Title>{escolasPB[2]?.NO_ENTIDADE}</Card.Title>
                <Card.Text>
                  Terceira Instituição de ensino com mais matrículas: {escolasPB[2]?.QT_MAT_BAS}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
