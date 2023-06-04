import { Banner } from "./components/Banner"
import { Counter } from "./components/Counter"

export const App = () =>{

  return(
    <div>
      <Banner
        title = "Word Counter App"
        subTitle="Paste or type your text below"
      />
      <Counter/>
    </div>

  )

}
