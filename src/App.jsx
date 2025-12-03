import Card from "./components/card"
import Counter from "./components/counter"
import './App.css'

function App() {

  const posts = [
    { 
      id: 1, 
      title: "Liga",
      subtitle: "Liga de Quito se convirtió en el cuarto y último semifinalista de Copa Ecuador luego de vencer por 2-0 y eliminar al Deportivo Cuenca en el estadio Rodrigo Paz Delgado la noche de este miércoles.",
      color: "#5148ffff"    
    },
    { 
      id: 2, 
      title: "Frontend", 
      subtitle: "Parte del desarrollo web que se encarga de la interfaz de usuario y la experiencia visual en aplicaciones y sitios web.",
      color: "#48a868ff",
     },
    { 
      id: 3, 
      title: "React", 
      subtitle: "Biblioteca de JavaScript para construir interfaces de usuario, especialmente para aplicaciones de una sola página.",
      color: "#a84848ff"
    }
  ]
  return (
    <>
      <div>
        <Counter/>
      </div>
      <div>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            color={post.color}
          />
        ))
        }
      </div>
    </>
  )
}
  
export default App

