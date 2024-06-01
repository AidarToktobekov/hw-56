interface Props{
    num: number;
  }
  const Quantity:React.FC<Props> = ({num})=>{
    return(
      <div>
        x{num}
      </div>
    )
  } 

  export default Quantity