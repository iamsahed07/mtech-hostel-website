// pages/index.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import GallerySection from "./components/GallerySection";

// Define separate arrays for each gallery section
const hallDayImages = [
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493167/new_logo_n22d0l.gif",
  // "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493167/new_logo_n22d0l.gif",
  // "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493167/new_logo_n22d0l.gif",
  // Add more URLs for "Hall Day" gallery
];

const bakkhaliTourImages = [
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493430/photo_6307579844556341901_y_vzpld0.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493662/photo_6307579844556341878_y_umhot6.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493694/photo_6307579844556341860_y_stze0h.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493698/photo_6307579844556341853_y_pgptsu.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493688/photo_6307579844556341868_y_yc91kd.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493682/photo_6307579844556341874_y_fzm1ja.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493684/photo_6307579844556341856_y_l8wluo.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493680/photo_6307579844556341859_y_bpk0bp.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493654/photo_6307579844556341861_y_rizh80.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493658/photo_6307579844556341879_y_lmc9x8.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493647/photo_6307579844556341882_y_ayfrgj.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493651/photo_6307579844556341880_y_fyr1if.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493520/photo_6307579844556341886_y_dcdia4.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493518/photo_6307579844556341887_y_pswnmp.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493513/photo_6307579844556341891_y_je7ezu.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493517/photo_6307579844556341888_y_wfgmct.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493516/photo_6307579844556341889_y_dluomc.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493514/photo_6307579844556341890_y_dqrlw5.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493512/photo_6307579844556341892_y_yveud2.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493506/photo_6307579844556341896_y_thyc8w.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493430/photo_6307579844556341898_y_rzhhsk.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493505/photo_6307579844556341897_y_tiyltd.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493431/photo_6307579844556341900_y_oacchh.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735493507/photo_6307579844556341895_y_pnek2n.jpg",
  // Add more URLs for "Bakkhali Tour" gallery
];

const cricketTournamentImages = [
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489641/IMG_0772_evsett.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489629/IMG_0717_h3btny.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489639/IMG_0815_x1urdq.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489623/photo_6194897993111552248_y_qyp2of.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489619/photo_6194897993111552209_y_1_lr1pfz.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489617/photo_6194897993111552247_y_1_yyh21i.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489616/photo_6194897993111552237_y_cv1xr5.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489608/photo_6194897993111552217_y_usstpz.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489608/photo_6194897993111552212_y_ymdh1t.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489596/photo_6194897993111552439_y_xr4itp.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489593/photo_6194897993111552448_y_gucsk6.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489585/photo_6194897993111552312_y_v0ye7k.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6194897993111552337_y_upwgej.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489584/photo_6194897993111552334_y_odlngt.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489585/photo_6194897993111552272_y_ontehh.jpg",
  // Add more URLs for "Cricket Tournament" gallery
];

const chessCompetitionImages = [
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489633/IMG_0756_z5ztyb.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489625/IMG_0755_kjamp0.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489671/IMG_0727_okyqmo.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489615/photo_6194897993111552366_y_iwr8jd.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489598/photo_6194897993111552379_y_mbq0pl.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489639/IMG_0762_hoxo5q.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489600/photo_6194897993111552374_y_sekqvv.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489599/photo_6194897993111552441_y_yfhege.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489592/photo_6194897993111552462_y_oxeu2j.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489596/photo_6194897993111552439_y_xr4itp.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489591/photo_6194897993111552487_y_y8wz5u.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489589/photo_6194897993111552481_y_dmccyy.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6194897993111552489_y_zoent5.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489587/photo_6194897993111552383_y_sihyiy.jpg",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6194897993111552475_y_bka8yw.jpg",
  // Add more URLs for "Chess Competition" gallery
];

// Define the alumni images for the new Alumni Section
const alumniImages = [
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6",
  "https://res.cloudinary.com/dhavdc5dx/image/upload/v1735489586/photo_6",
  // Add more URLs for "Alumni" gallery
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow">
        <GallerySection
          id="hall-day"
          title="Upcoming Hall Day !!"
          images={hallDayImages}
        />
        <GallerySection
          id="bakkhali-tour"
          title="Bakkhali Tour"
          images={bakkhaliTourImages}
        />
        <GallerySection
          id="cricket"
          title="Short Cricket Tournament"
          images={cricketTournamentImages}
        />
        <GallerySection
          id="chess"
          title="Chess Competition"
          images={chessCompetitionImages}
        />
         <GallerySection
          id="alumni"
          title="Alumni Meet & Events"
          images={alumniImages} // This is the new Alumni Section
        />
      </main>
      <Footer />
    </div>
  );
}
