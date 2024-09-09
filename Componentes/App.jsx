import {Header} from "./components/Header";
import footer from  "./components/footer";
import {Post} from "./componentsPost";
import { useState } from "react";


export default function App() {
    const {user, setUser} = useState(null)


    useEffect (()) => {}
    //destructuracion -> Nos permite obtener la propiedad deseada, van entre llaves
    const { data, error } = await <supabase.auth.gestSession();
    if (error) {
        console.log(error);
    } else {
        setUser(data?.session?.user);

    }
     gestSession();

   },[]);

const headleLogin = async () => ()
    const {error} = await supabase.auth.singInWithOAutH({
    provider: "github"

    });

  if (error) {
    console.log(error);
  };



    return (
        <>
        <Header/>
        <button>Inicio Sesion <Github</button>
        <Post
        titulo={"Titulo Ejemplo"}
        description={"description foto"}
        link={
            "https://www.blogdelfotografo.com/wp-content/uploads/2014/04/111.jpg"
        }
        parrafo={"Este es el parrafo de la foto"}
      />

        <footer/>
        </>
    );
}