import React from 'react'

const Contactbody = () => {
  return (
    <main>
        <div className='contact'>
                <div className='contact-text'>
                <h1>Bizimlə əlaqə</h1>
                <p>
                Bizə mesaj göndərin və ən qısa zamanda sizinlə əlaqə saxlayaq. Siz bizimlə telefonla da əlaqə saxlaya bilərsiniz, hər bir məkanın birbaşa telefon nömrəsi üçün yer səhifələrimizə baxın. Sizdən xəbər gözləyirik!
                </p>
                </div>

        
                    <form className='form'>
                        <label htmlFor='name'>
                            Name  <span className='span'>-Required</span> <input name='name' type="text"  placeholder='Name' required/>
                        </label>

                        <label htmlFor='email'>
                            Email  <span className='span'>-Required</span> <input name='email' type="email"  placeholder='Email' required/>
                        </label>

                        <label htmlFor='number'>
                            Number  <span className='span'>-Required</span> <input name='number' type="text"  placeholder='Phone Number' required/>
                        </label>
                        <div className='select-div'>
                            <label>Nə ilə bağlı əlaqə saxlayırsınız?</label>
                         <select placeholder='Nə ilə bağlı əlaqə saxlayırsınız?'>
                            <option>Nə ilə bağlı əlaqə saxlayırsınız?</option>
                            <option>Ümumi Sorğu</option>
                            <option>Mətbuat  Sorğusu</option>
                         </select>
                        </div>

                        <label>Sizin Mesajiniz </label>
                        <textarea placeholder='Sizin Mesajiniz'>

                        </textarea>
                    </form>
                
        </div>
    </main>
  )
}

export default Contactbody
