import {Table} from 'react-bootstrap';
import escolasUrl from '../datasets/escolas.json?url';
import { useEffect, useState } from 'react';
const InstituicaoEnsino = () => {
const [escolas, setEscolas] = useState([]);

  useEffect(() => {
  fetch(escolasUrl)
    .then(response => response.json())
    .then(dados => setEscolas(dados))
    .catch(erro => console.error(erro));
}, []);
  const escolasPB = escolas.filter((escola)=> escola.SG_UF == 'PB').sort((a,b)=> b.QT_MAT_BAS - a.QT_MAT_BAS).slice(0,10);

  return (
    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Quantidade de Matrículas</th>
          </tr>
        </thead>
        <tbody>
          {escolasPB.map((instituicaoEnsino, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{instituicaoEnsino.NO_ENTIDADE}</td>
                <td>{instituicaoEnsino.QT_MAT_BAS}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default InstituicaoEnsino;
