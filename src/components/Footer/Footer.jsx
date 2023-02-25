import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__logo-box">
            <img src="/img/CACAO-DE-LILIO-logo-gold.png" alt="full logo" className='footer__logo' />
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer_list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Company</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Contact us</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Privacy</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Terms</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Carrers</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                &copy;<a href="#" className="footer__link">Build by  Bruce Andrada</a>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer