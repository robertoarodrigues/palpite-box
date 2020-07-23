import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-900 p-6 mb-0'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href='https://robertorodrigues.dev'>Roberto Rodrigues</a> / {' '}
        <a className='hover:underline' href='https://linkedin.com/in/robertorodriguesazevedo'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/robertoarodrigues'>Github</a>
        <div className='mt-2 '>
          <img className='inline p-4 h-30 w-40' src='/logo_semana_fsm.png' />
          <img className='inline p-4 h-30 w-40' src='/logo_devpleno.png' />
        </div>
      </div>

    </div>
  )
}
export default Footer