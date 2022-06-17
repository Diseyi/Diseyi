

const Icon = (props) => {
  return (
    <div class={props.frame} >
      <img src={props.src} alt={props.alt} class={props.iconClass} />
    </div>
  )
}

export default Icon