import React from 'react'
import { Button } from '../Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                    Feel free to email me about any job opportunity's any time.
                </p>
                <p className='footer-subscription-text'>
                    Thank you for stopping by.
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder='your email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Contact</Button>
                    </form>
                </div>
            </section>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='https://github.com/jrobi133'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-github fa-2x' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/john-robinson-966329b8/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin fa-2x' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
