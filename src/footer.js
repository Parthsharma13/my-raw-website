import './forhome.css';
function Footer(){
    return(
        <div className='Body'>
        {/* <h1>Footer</h1> */}
        <div className='firstdiv'>
        <ul className='footerul'>
            <li>
                <span className="developer">DEVELOPER :</span> PARTH SHARMA
                </li>
            <li><span className="developer">Email :</span> parthsharma240404@gmail.com</li>

            {/* <li><a target="_blank" href="https://icons8.com/icon/32292/instagram">Instagram</a></li> */}
            <span className='social'>
            <li><a target='_blank' href='https://www.instagram.com/parth_sharma______/'><img src={require('./instagram-logo.png')} style={{width:'50px',maxWidth:'100%'}}/></a>
            </li>
            <li><a target='_blank' href='https://www.linkedin.com/in/parth-sharma-24p/'><img src={require('./linkedin (1).png')}style={{width:'50px'}}/></a></li>

            </span>
        </ul>
        </div>
        <div>

        <img src={require('./2.1.png')} style={{width:'180px',maxWidth:'100%',mixBlendMode: 'color-dodge'}}/>
        </div>
  </div>  )
}
export default Footer;