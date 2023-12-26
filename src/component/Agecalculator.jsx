import{ React,useState} from 'react';
import styles from './Agecalulator.module.css';
import { Link } from 'react-router-dom';

export const Agecalculator = () => {

const [dt,setDt] = useState('')

const [yr,setYr] = useState('')
const [mn,setMn] = useState('')
const [dy,setDy] = useState('')




  const d = new Date();
 const c_dt = new Date().toLocaleDateString('en-GB');
  const givenD = new Date(dt);
  
 

const handleResult =()=>{
  
  if (dt.length > 10) {
    alert('Please Select correct date')
  } else if (dt.length < 10) { alert('Please Select correct date') } else if(givenD > d) { alert(`Please Select before ${c_dt}`) } else{
     let crYr =  d.getFullYear() - givenD.getFullYear(dt);
  setYr(crYr)

  let crMn =  d.getMonth() - givenD.getMonth(dt);
  setMn(crMn)

  let crDy =   d.getDate() - givenD.getDate(dt);
    setDy(crDy)
    }
 
 

}



const handleday = ()=>{
  if (dt.length < 10) {
    alert('Please Select correct date')
  } else if(givenD > d) { alert(`Please Select before ${c_dt}`) }else {
    const days = ((new Date().getTime() - new Date(dt).getTime()) / 86400000).toFixed()
    setMn('')
    setYr('')
    setDy(days)
  }

}


  const handleMonths = () => {
    if (dt.length < 10) {
      alert('Please Select correct date')
    }else if(givenD > d) { alert(`Please Select before ${c_dt}`) } else {
  
      const crMnth = (new Date().getMonth() - new Date(dt).getMonth());
      const calcMnth = (new Date().getFullYear() - new Date(dt).getFullYear()) * 12
      const res = crMnth + calcMnth
      setMn(res)
      setDy('')
    }

}
 


  return (
    <div className={styles.main_container}>
    
    <div className={styles.container}>
    <div className={styles.c_name}><h3>- - NtCoder - -</h3></div> 
        <div className={styles.heading}>Age Calculator</div>
        <div className={styles.result}><label>Your Age Is?</label> 
        <div className={styles.results}><ul><li> <span className={styles.dt_data}>{yr}</span> Year's </li><li> <span className={styles.dt_data}>{mn} </span>Month's </li><li> <span className={styles.dt_data}>{dy}</span> Day's </li></ul></div></div>
        <div className={styles.inputs}><div className={styles.label}>Select Your Birth Date</div><input className={styles.inpt} type="date" name='dt' value={dt} onChange={(e)=>setDt(e.target.value)} required/></div>
        <div className={styles.btn}><button className={styles.btn_btn}><Link to= '/'>Calculator</Link></button><button className={styles.btn_btn} onClick={handleResult} ><h5>Calculate Age</h5></button><button className={styles.btn_btn} onClick={handleday}>day's</button><button className={styles.btn_btn} onClick={handleMonths}>Month's</button></div>
        
    </div>
    </div>
  )
}

 