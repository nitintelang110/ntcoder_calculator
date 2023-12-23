import  { React, useEffect, useState } from 'react';
import styles from './calculator.module.css';
import { Link } from 'react-router-dom';


export const Calculator = () => {
    const [value,setValue]=useState('0');
  const [res,setRes]=useState()



    useEffect(()=>{
     document.addEventListener('keydown',keybrd)
    },[])

const keybrd =(e)=>{

}


  return (
    <div className={styles.container}>

<div className={styles.calculator}>
<h3 className={styles.comp_name}>- - NtCoder - -</h3>
        <form>
           
            <div className={styles.display}>
                <input type="text" name={styles.display} readOnly id="scrn"  value={value.length>23?alert('You Riched Your Limit,Please Stop!'):value} />
            </div>
            <div>
                <input type="button" value="AC" className={styles.operator}  onClick={()=>setValue('')}/>
                <input type="button" value="DEL" className={styles.operator} onClick={()=>setValue(value.slice(0,-1))} />
                <input type="button" value="." className={styles.operator}  onClick={(e)=>setValue(value + e.target.value)}/>
                <input type="button" value="/" className={styles.operator} onClick={(e)=>setValue(value + e.target.value)} />
            </div>
            <div>
                <input type="button" value="7" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="8" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="9" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="*" className={styles.operator} onClick={(e)=>setValue(value + e.target.value)} />
            </div>
            <div>
                <input type="button" value="4" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="5" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="6" onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="-" className={styles.operator} onClick={(e)=>setValue(value + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="1"  onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="2"  onClick={(e)=>setValue(value + e.target.value)} />
                <input type="button" value="3"  onClick={(e)=>setValue(value + e.target.value)}/>
                <input type="button" value="+" className={styles.operator}  onClick={(e)=>setValue(value + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="00" onClick={(e)=>setValue(value+ e.target.value)}/>
                <input type="button" value="0"  onClick={(e)=>setValue(value+ e.target.value)}/>
                <input className={styles.equal} type="button" value='=' onClick={()=>setValue(eval(value))} />
            </div>
            <button className={styles.age_calcu}><Link className={styles.age_calcu_link}  to='/agecalculator'>Age Calculator</Link></button>
        </form>
    </div>



    </div>
  )
}

