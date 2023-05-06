import { IoLogoReact,IoLogoHtml5,IoLogoCss3,IoLogoJavascript, 
    IoLogoLinkedin,
    IoLogoFacebook,
    IoLogoInstagram,
    IoChatboxEllipses
 } from 'react-icons/io5'

function Config() {
  const data = [
   
    [ 
      {
        title: 'React',
        Icons: <IoLogoReact/>
      },
      {
        title: 'Html5',
        Icons: <IoLogoHtml5/>
      },
      {
        title: 'Css',
        Icons: <IoLogoCss3/>
      },
      {
        title: 'Javascript',
        Icons: <IoLogoJavascript/>
      }
    ],
    [
        {
            title:'Posts',
            image:'',
            url:'',
        },
        
        {
            title:'O que assistir!',
            image:'',
            url:'',
        },
        
        {
            title:'Site de Filme',
            image:'',
            url:'',
        },  
    ],
    [ 
        {
          title: 'Linkedin',
          Icons: <IoLogoLinkedin/>
        },
        {
          title: 'facebook',
          Icons: <IoLogoFacebook/>
        },
        {
          title: 'Instagram',
          Icons: <IoLogoInstagram/>
        },
        {
          title: 'Email',
          Icons: <IoChatboxEllipses/>
        }
      ],

]

  return (data)
}

export default Config

