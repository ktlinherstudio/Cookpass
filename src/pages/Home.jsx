import './Home.scss';
import Header from '../components/Header';
import SectionHero from '../components/SectionHero';
import SectionExplore from '../components/SectionExplore/SectionExplore';
// import SectionPicks from '../components/SectionPicks';
// import SectionSubscribe from '../components/SectionSubscribe';

export default function Home() {
  return (
   <>
      <Header />
      <main className="home-page">
        <section className="section section-1">
          <SectionHero />
        </section>
        <section className="section section-2">
          <SectionExplore />
        </section>
        {/* <section className="section section-3">
          <SectionPicks />
        </section>
        <section className="section section-4">
          <SectionSubscribe />
        </section> */}
      </main>
    </>
  );
}
