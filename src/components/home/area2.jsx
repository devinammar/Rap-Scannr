export const Area2 = () => {
  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center flex flex-row-reverse justify-between max-[640px]:mt-20 max-[640px]:grid max-[640px]:grid-cols-[auto] max-[640px]:grid-rows-[auto_auto_auto]">
        <div className="w-[560px] max-[640px]:justify-self-center max-[640px]:w-screen"><img src="/imagearea2.jpg" className=""/></div>
      <div className="content-end flex flex-col justify-between pt-16 max-[1120px]:pt-12 max-[768px]:pt-8 max-[640px]:pt-16 ml-20 mr-40 max-[900px]:mr-20 max-[768px]:ml-14 max-[480px]:ml-8">
        <p className="text-p max-w-[542px] max-[1280px]:pb-16 max-[1120px]:pb-16 text-black">
          Rap Scannr is a rap music analysis platform designed to break down rap
          flow, lyrical cadence and vocal delivery through interactive visual
          tracking. Users can analyze tracks from different artists and explore
          how rhythm, pacing, and syllable patterns shape each performance. 
          <br/><br/>
          From speed detection to track comparison, Rap Scannr helps listeners
          experience rap from a deeper technical perspective. Built for modern
          hip-hop culture, the platform combines audio analysis, flow
          visualization, peak speed tracking, and performance insights into one
          immersive experience.
        </p>
        <h2 className="text-h3 text-black">Visualize and see the rhythm behind every rap verse</h2>
      </div>
    </div>
  );
};
