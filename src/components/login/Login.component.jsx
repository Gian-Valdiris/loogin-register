import React,{ useState } from 'react'
import './Login.component.css';
import axios from 'axios'
export const LoginComponent = () => {

  const [state,setState ] = useState({
    mail:'',
    password:'',
    username:''
  })

  const [register,setRegister ] = useState(false);

  const onChange = ({target})=>{
    const {name,value} = target;
    setState({
      ...state,
      [name]:value
    })
  }

  const sendForm=async(event)=>{
    event.preventDefault();
    console.log('envio de formulario')
    if (!register){
      const {mail,password} = state;
      console.log({mail,password})
    }
  }

  const onChangeRegister=()=>{
    setRegister(!register)
    setState({
      mail:'',username:'',password:''
    })
  }

  const fieldsLogin = [
    {
      name:'mail',
      placeholder:'Ingrese el mail',
      type:'text'
    },
    {
      name:'password',
      placeholder:'Ingrese el password',
      type:'password'

    }
  ]

  const fieldsRegister = [
    ...fieldsLogin,
    {
      name:'username',
      placeholder:'Ingrese el username',
      type:'text'
    }
  ]


  return (
    <div className='login_component'>
      <div className="shadow">
        <div className='init'>
          <h2>{ (register) ? 'Registro de usuario':'Inicio de seccion'} </h2>
        </div>
        <form onSubmit={sendForm}>
          {
            register ? fieldsRegister.map(i=>(<input type={i.type} placeholder={i.placeholder} value={state[i.name]} name={i.name}  onChange={onChange} key={i.placeholder} />)):
            fieldsLogin.map(i=>(<input type={i.type} placeholder={i.placeholder} value={state[i.name]} name={i.name} key={i.type} onChange={onChange}/>))
          }
          <input type="submit"  value='enviar'/>
        </form>
        <a href='#' onClick={onChangeRegister}>{(register)?'iniciar seccion':'registrarme'}</a>
      </div>

    </div>
  )
}
