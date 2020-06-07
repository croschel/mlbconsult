import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import history from '../../services/history';
import { Link } from 'react-router-dom';

import mlb from '../../services/mlb';
import Background from '../../components/Background';
import { Container, BackButton, Content, AsideBox, SearchBox } from './styles';

interface Name {
  name: string
  id: number
}

const Consult = () => {
  const [categories, setCategories] = useState<Name[]>([]);
  const [search, setSearch] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>();
  const [categoryName, setCategoryName] = useState<string>('');
  const [backgroundVisible, setBackgroundVisible] = useState<boolean>(false);

  // load complete list of categories from MLB API
  useEffect(() => {
    mlb.get('sites/MLB').then(response => {
      const names = response.data.categories;
      setCategories(names);
    });
  }, []);

  async function handleSearch() {
    try {
      const response = await mlb.get(`sites/MLB/search?q=${search}`);
      const id = response.data.filters[0].values[0].id;
      const name = response.data.filters[0].values[0].name;
      setCategoryId(id);
      setCategoryName(name);
      setBackgroundVisible(true);
    } catch (error) {
      setCategoryName('Nenhuma categoria encontrada para esse produto!')
    }

  }

  return (
    <Container>
      <Background />
      <Link to="/">
        <span><FiArrowLeft size={50} /></span>
        <p>Voltar</p>
      </Link>
      <Content>
        <AsideBox>
          <h2>Lista de Categorias</h2>
          <table>
            <tbody>
              {categories.map(cat => (
                <tr key={cat.id}>
                  <td>{cat.name}</td>
                  <td>{cat.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AsideBox>
        <SearchBox>
          <h2>Procure pelo produto</h2>
          <input
            type="search"
            required
            placeholder="Digite o produto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch} className="ripple" type="button">Procurar</button>
          <p id="category-name">{categoryName}</p>
          <p style={{ background: backgroundVisible ? '#5BF69E' : 'none' }} id="category-id">{categoryId}</p>
        </SearchBox>
      </Content>
    </Container>
  );
}

export default Consult;