import About from "../About/About"
import Stack from "../Stack/Stack"

const Screen = () => {
  return (
    <div className="flex space-x-2 justify-between items-stretch w-full h-full min-w-0">
      <div className="flex-1 min-w-0 overflow-hidden">
        <About />
      </div>
      <div className="flex-1 min-w-0 overflow-hidden">
        <Stack />
      </div>
    </div>
  )
}

export default Screen
