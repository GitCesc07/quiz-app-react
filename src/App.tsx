import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <main className="max-w-4xl w-full p-4 mx-auto">
        <h1 className="text-center uppercase font-bold text-2xl">Prueba de CPA</h1>
        <section className="flex items-center justify-center w-full mt-4">
          <Navbar />
        </section>
      </main>
    </>
  )
}

export default App
