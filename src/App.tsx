import { ToastContainer } from "react-toastify"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import DeletarPostagem from "./components/postagens/deletarpostagem/DeletarPostagem"
import FormularioPostagem from "./components/postagens/formulariopostagem/FormularioPostagem"
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens"
import DeletarTema from "./components/temas/deletartema/DeletarTema"
import FormularioTema from "./components/temas/formulariotemas/FormularioTema"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import { AuthProvider } from "./contexts/AuthContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Perfil from "./pages/perfil/Perfil"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App
