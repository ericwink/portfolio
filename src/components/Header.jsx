export default function Header() {
    return (
        <header id='header'>
            <img className="logo" src="" alt="EricWinkDev" />
            {/* <h1>EricWinkDev</h1> */}
            {/* <p className='title2'>Custom Coding Solutions</p> */}
            <ul role='list'>
                <li><a href="https://www.linkedin.com/in/eric-winkelspecht/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a></li>
                <li><a href="https://youtube.com/@ericwinkdev" target="_blank"><img src="/youtube.png" alt="" /></a></li>
                <li><a href="https://github.com/ericwink" target="_blank"><img src="/github.png" alt="github" /></a></li>
                <li><a href="mailto:eric.winkelspecht@gmail.com" target="_blank"><img src="/mail.png" alt="mail" /></a></li>
                <li><a href="https://anchor.fm/self-taught-devs" target="_blank"><img src="/rss-feed.png" alt="podcast" /></a></li>
                {/* <li><a href="https://twitter.com/ericwinkdev" target="_blank"><img src="/twitter.png" alt="" /></a></li> */}
            </ul>
        </header>
    )
}