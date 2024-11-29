type Icon = {
   iconlink: string,
   iconName: string,
}

function  ContactIcon({iconlink, iconName}: Icon) {
    return <a  className="bi" href={iconlink} target="_blank"><i className={iconName}></i></a>
}

export default ContactIcon;