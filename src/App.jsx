import Cards from "./components/Cards"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col pt-5 md:w-11/12 mx-auto">
        <Header />
        <Cards />
      </div>
    </div>
  )
}

export default App