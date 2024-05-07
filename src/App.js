import './App.css';
import BannerMain from './componentes/BannerMain';
import VideoCardGroup from './componentes/Carousel';
import Menu from './componentes/Menu';
import dadosInciais  from './data/dados_iniciais.json'

function App() {
  return (
    <div className="App">
      <div>
        <Menu/>
        <BannerMain
        videoTitle={dadosInciais.categorias[0].videos[0].titulo}
        url={dadosInciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
        />

         <VideoCardGroup
        ignoreFirstVideo
        category={dadosInciais.categorias[0]}
        />
         <VideoCardGroup
        category={dadosInciais.categorias[1]}
        />
         <VideoCardGroup
        category={dadosInciais.categorias[2]}
        />
         <VideoCardGroup
        category={dadosInciais.categorias[3]}
        />
        
        
      </div>
    </div>
  );
}

export default App;
