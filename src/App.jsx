import LightMask from "./components/LightMask.jsx"
import ButtonDark from "./components/ButtonDark.jsx"
import ButtonLight from "./components/ButtonLight.jsx"

function App() {


  return (
    <>
      <main className="bg-[#EBEAE1] min-h-screen dark:bg-[#121211]">
        <section className="min-h-screen flex flex-row justify-center items-center">
          <ButtonDark/>
          <ButtonLight/>
          <LightMask/>
        </section>
      </main>
    </>
  )
}

export default App
