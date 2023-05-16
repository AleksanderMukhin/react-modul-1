export const Head = (props) => {
  console.log(props)
  return <p id={props.id} className={props.clas}>
    I am Head
  </p>
}