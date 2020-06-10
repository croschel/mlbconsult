import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiChevronsDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import mlb from '../../services/mlb';
import Background from '../../components/Background';
import { Container, Content, AsideBox, SearchBox, Response } from './styles';

interface Name {
  name: string,
  id: number,
  index: number
}

const Consult = () => {
  const [categories, setCategories] = useState<Name[]>([]);
  const [search, setSearch] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>();
  const [categoryName, setCategoryName] = useState<string>('');
  const [backgroundVisible, setBackgroundVisible] = useState<boolean>(false);
  const [categoryFinal, setCategoryFinal] = useState<Name[]>([]);
  //const [counter, setCounter] = useState<number>(0);


  // load complete list of categories from MLB API
  useEffect(() => {
    mlb.get('sites/MLB').then(response => {
      const names = response.data.categories;
      setCategories(names);
    });
  }, []);

  async function handleSearch() {
    try {
      let counter = 1;
      const response = await mlb.get(`sites/MLB/category_predictor/predict?title=${search}`);
      const categoryPath = response.data.path_from_root;
      setCategoryFinal(categoryPath);
      setCategoryId(categoryPath[categoryPath.length - 1].id);
      const newCategoryPath = categoryPath.map((cat: Name) => {
        return {
          ...cat,
          index: counter++,
        }
      })
      console.log(newCategoryPath)
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
          <Response>

            {categoryFinal.map(cat => (
              <div key={cat.id}>
                <div id="categories">
                  <p id="category-name">{cat.name}</p>
                  <p id="category-id">{cat.id}</p>
                </div>
                <FiChevronsDown id="chevron" size={40} />
              </div>
            ))}

          </Response>
        </SearchBox>
      </Content>
    </Container >
  );
}

export default Consult;