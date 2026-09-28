import React,{useEffect,useState} from 'react';
import{createRoot}from'react-dom/client';
import'./styles.css';

const pages={HOME:'/',MUSIC:'/music',LIVE:'/live',EPK:'/epk',CONTACT:'/contact'};
const gigs=[['01 OCT',"Nice 'n' Sleazy's",'Glasgow','https://www.eventbrite.ca/e/thomas-duxbury-eyes-of-home-velvet-glasgow-nice-n-sleazy-tickets-1994096886467']];

function pathToPage(path){
  const p=path.replace(/\/$/,'')||'/';
  if(p==='/')return'HOME';
  if(p==='/music')return'MUSIC';
  if(p==='/live')return'LIVE';
  if(p==='/epk')return'EPK';
  if(p==='/contact')return'CONTACT';
  return'HOME';
}
function App(){
  const[page,setPage]=useState(()=>pathToPage(window.location.pathname));
  useEffect(()=>{const onPop=()=>setPage(pathToPage(window.location.pathname));window.addEventListener('popstate',onPop);return()=>window.removeEventListener('popstate',onPop)},[]);
  const goto=p=>{const path=pages[p];if(window.location.pathname!==path)window.history.pushState({},'',path);setPage(p);window.scrollTo({top:0,behavior:'smooth'})};
  return <div className="site">
    <header className="siteHeader">
      <button className="wordmark" onClick={()=>goto('HOME')} aria-label="Velvet home">VELVET</button>
      <nav className="siteNav" aria-label="Main navigation">
        {Object.keys(pages).map(k=><button key={k} className={page===k?'active':''} onClick={()=>goto(k)}>{k==='EPK'?'PRESS':k}</button>)}
      </nav>
    </header>

    <main>
      {page==='HOME'&&<Home goto={goto}/>}
      {page==='MUSIC'&&<Music/>}
      {page==='LIVE'&&<Live/>}
      {page==='EPK'&&<EPK/>}
      {page==='CONTACT'&&<Contact/>}
    </main>

    <footer className="siteFooter">
      <span>VELVET — GLASGOW</span>
      <span>© 2026</span>
      <div className="footerLinks">
        <a href="https://www.instagram.com/velvetgla/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://velvetbandglasgow.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a>
        <a href="https://open.spotify.com/artist/45dG1NWjvFA9SkPLICjGr8" target="_blank" rel="noreferrer">Spotify</a>
      </div>
    </footer>
  </div>;
}

function Home({goto}){
  return <div className="home">
    <section className="homeHero">
      <img src="/velvet-home.jpg" alt="Velvet" className="homeHeroImage"/>
      <div className="heroOverlay">
        <p className="eyebrow">GLASGOW · FIVE-PIECE</p>
        <h1>VELVET</h1>
        <p className="heroCaption">UNDER THE WATER — OUT NOW</p>
      </div>
    </section>

    <section className="homeIntro sectionGrid">
      <div>
        <p className="eyebrow">LATEST</p>
        <h2>Under the Water</h2>
      </div>
      <div className="introCopy">
        <p>An emotional slow-rocker about insecurity, loss and desperation, built around raw guitars and a direct, melodic pull.</p>
        <button className="textLink" onClick={()=>goto('MUSIC')}>LISTEN TO THE RELEASE <span>↗</span></button>
      </div>
    </section>

    <section className="featureSplit">
      <div className="featureArt">
        <img src="/artwork/under-the-water.jpg" alt="Under the Water artwork"/>
      </div>
      <div className="featureCopy">
        <p className="eyebrow">01 MAY 2026 · SINGLE</p>
        <h2>Under<br/>the Water</h2>
        <div className="rule"/>
        <div className="streamLinks">
          <a href="https://open.spotify.com/artist/45dG1NWjvFA9SkPLICjGr8" target="_blank" rel="noreferrer">Spotify ↗</a>
          <a href="https://music.apple.com/gb/artist/velvet/657341158" target="_blank" rel="noreferrer">Apple Music ↗</a>
          <a href="https://velvetbandglasgow.bandcamp.com/album/under-the-water" target="_blank" rel="noreferrer">Bandcamp ↗</a>
        </div>
      </div>
    </section>

    <section className="homeLive sectionGrid">
      <div>
        <p className="eyebrow">NEXT LIVE</p>
        <div className="gigRow">
          <div className="gigDate">01<br/><span>OCT</span></div>
          <div>
            <h3>Nice 'n' Sleazy's</h3>
            <p>Glasgow</p>
          </div>
        </div>
      </div>
      <div className="liveAside">
        <p>Velvet live in Glasgow.</p>
        <a className="textLink" href={gigs[0][3]} target="_blank" rel="noreferrer">TICKETS <span>↗</span></a>
        <button className="textLink" onClick={()=>goto('LIVE')}>ALL LIVE DATES <span>↗</span></button>
      </div>
    </section>

    <section className="photoFeature">
      <img src="/velvet-home.jpg" alt="Velvet live photography"/>
      <div className="photoNote">VELVET / GLASGOW / 2026</div>
    </section>

    <section className="homeClose sectionGrid">
      <div>
        <p className="eyebrow">ABOUT</p>
        <h2>A Glasgow band making noisy, melodic songs.</h2>
      </div>
      <div className="introCopy">
        <p>Velvet have played sold-out headline shows around Glasgow, alongside festival appearances and support slots across Scotland.</p>
        <button className="textLink" onClick={()=>goto('EPK')}>READ MORE ABOUT VELVET <span>↗</span></button>
      </div>
    </section>
  </div>
}

function Music(){
  return <PageShell eyebrow="MUSIC" title="Releases">
    <section className="releaseFeature">
      <img src="/artwork/under-the-water.jpg" alt="Under the Water artwork"/>
      <div>
        <p className="eyebrow">01 MAY 2026 · SINGLE</p>
        <h2>Under the Water</h2>
        <p className="bodyCopy">An emotional, slow-rocker exploring insecurity, loss and desperation inside a raw and riff-laden pop song.</p>
        <div className="streamLinks stacked">
          <a href="https://open.spotify.com/artist/45dG1NWjvFA9SkPLICjGr8" target="_blank" rel="noreferrer">Spotify ↗</a>
          <a href="https://music.apple.com/gb/artist/velvet/657341158" target="_blank" rel="noreferrer">Apple Music ↗</a>
          <a href="https://velvetbandglasgow.bandcamp.com/album/under-the-water" target="_blank" rel="noreferrer">Bandcamp ↗</a>
        </div>
      </div>
    </section>
  </PageShell>
}
function Live(){
  return <PageShell eyebrow="LIVE" title="Shows">
    <section className="liveList">
      {gigs.map(g=><div className="largeGig" key={g[0]}>
        <div className="gigDate">{g[0]}</div>
        <div><h2>{g[1]}</h2><p>{g[2]}</p></div>
        <a className="textLink" href={g[3]} target="_blank" rel="noreferrer">TICKETS ↗</a>
      </div>)}
    </section>
    <section className="archive">
      <p className="eyebrow">PAST SHOWS</p>
      <p className="bodyCopy">Audio · The Hug & Pint · Nice 'n' Sleazy's · King Tut's · Stag and Dagger · Endless Summer · Edinburgh Fringe Festival · + more</p>
    </section>
  </PageShell>
}
function EPK(){
  return <PageShell eyebrow="PRESS / ABOUT" title="Velvet">
    <section className="copyGrid">
      <div>
        <p className="bodyCopy">Velvet are a Glasgow five-piece. Their music sits somewhere between dreamy indie, guitar-led alternative and restless pop — always melodic, sometimes loud.</p>
        <p className="bodyCopy">The band have played sold-out headline shows at Audio and appeared at Stag and Dagger, Endless Summer and the Edinburgh Fringe Festival.</p>
      </div>
      <div>
        <p className="eyebrow">PRESS</p>
        <p className="quote">“A sophisticated and unique sound.”</p>
        <p className="source">— Discovery Music</p>
      </div>
    </section>
  </PageShell>
}
function Contact(){
  return <PageShell eyebrow="CONTACT" title="Get in touch">
    <section className="copyGrid">
      <div><p className="eyebrow">BOOKING / GENERAL</p><a className="bigContact" href="mailto:velvetbandglasgow@gmail.com">velvetbandglasgow@gmail.com</a></div>
      <div><p className="eyebrow">ONLINE</p><div className="contactLinks">
        <a href="https://www.instagram.com/velvetgla/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://www.tiktok.com/@velvetgla" target="_blank" rel="noreferrer">TikTok ↗</a>
        <a href="https://www.facebook.com/share/19bMxvLLCw/" target="_blank" rel="noreferrer">Facebook ↗</a>
        <a href="https://x.com/velvetbandgla" target="_blank" rel="noreferrer">X ↗</a>
      </div></div>
    </section>
  </PageShell>
}
function PageShell({eyebrow,title,children}){
  return <div className="page">
    <section className="pageIntro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
    </section>
    {children}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
