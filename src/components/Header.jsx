export default function Header() {
    return (
        <header id='header'>
            <h1>Eric Winkelspecht</h1>
            <p className='title2'>Software Engineer specializing in Web Application Development</p>
            <ul role='list'>
                <li><a href="https://www.linkedin.com/in/eric-winkelspecht/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a></li>
                <li><a href="https://youtube.com/@ericwinkdev" target="_blank"><img src="/youtube.png" alt="" /></a></li>
                <li><a href="https://github.com/ericwink" target="_blank"><img src="/github.png" alt="github" /></a></li>
                <li><a href="mailto:eric.winkelspecht@gmail.com" target="_blank"><img src="/mail.png" alt="mail" /></a></li>
                {/* <li><a href="https://twitter.com/ericwinkdev" target="_blank"><img src="/twitter.png" alt="" /></a></li> */}
            </ul>
        </header>
    )
}