type nav = {
  navLink: string,
  navNumber: string,
  navName: string
}

function NavTarget({navLink, navNumber, navName}: nav) {
    return <a className="navAni" href={navLink}><span className='titlenumber'>{navNumber}</span>{navName}</a>
}

export default NavTarget;