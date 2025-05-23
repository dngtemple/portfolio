import { div } from 'framer-motion/client'
import React from 'react'
import { FaInstagramSquare, FaTelegram, FaWhatsappSquare, } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function footer() {
  return (
<footer className="footer footer-horizontal footer-center  bg-zinc-800 text-primary-content p-10">
  <aside>
    
    <p className="font-bold">
      Clinton Templeton
      <br />
      Providing reliable tech solution
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='http://twitter.com/dngtemple ' target='blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-info fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a href='https://github.com/dngtemple' target='blank'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="text-info fill-current"
>
  <path
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 
    3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
    1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.304.76-1.604-2.665-.3-5.467-1.335-5.467-5.931 
    0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 
    0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404 
    c1.02.005 2.045.138 3.003.404 
    2.291-1.552 3.297-1.23 3.297-1.23 
    .653 1.653.241 2.874.118 3.176.77.84 
    1.234 1.911 1.234 3.221 
    0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222 
    0 1.606-.015 2.898-.015 3.293 
    0 .321.216.694.825.576C20.565 22.092 
    24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path>
</svg>

      </a>
      <a href='https://www.linkedin.com/in/clinton-templeton-a8700a271' target='blank'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  className="text-info fill-current"
>
  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 
    0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.3c-.966 
    0-1.5-.722-1.5-1.5S5.534 5.7 6.5 5.7s1.5.722 1.5 1.5-.534 1.5-1.5 
    1.5zM20 19h-3v-4.5c0-1.121-.401-1.887-1.405-1.887-.765 
    0-1.221.516-1.421 1.015-.073.178-.091.427-.091.676V19h-3s.04-9 
    0-9h3v1.276c.398-.614 1.11-1.489 2.703-1.489C18.43 9.787 20 
    11.063 20 14.084V19z" />
</svg>

      </a>
    </div>
  </nav>
</footer>
  )
}
