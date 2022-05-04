interface ButtonProps {
  text?: string;
}

function Button (props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <>
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button />
    </>
  )
}

export default App
