interface Props{
    name: string;
  }

const Ingredients:React.FC<Props>= ({name})=>{
    return(
      <div className={name}></div>
    )
  }

  export default Ingredients