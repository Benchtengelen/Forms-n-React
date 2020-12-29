import React from 'react'

const Kisi = ({name,state,metod}) => {
          return(
              <div className="card">
                  <h1>Adı: {name}</h1>
                  <h3>Durum: <span className={state}> {state} </span></h3>
                   <button onClick={metod}>Durumu Değiştir.</button>
              </div>
          )
        }

export default Kisi
