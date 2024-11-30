type nav = {
  navLink: string,
  navNumber: string,
  navName: string,
  onclick: any
}

function NavTarget({navLink, navNumber, navName, onclick}: nav) {
    return <a onClick={onclick} className="navAni" href={navLink}><span className='titlenumber'>{navNumber}</span>{navName}</a>
}

export default NavTarget;