export const Area2 = () => {
  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center flex flex-row-reverse justify-between">
        <div className="[grid-area:area2image]"><img src="/imagearea2.jpg" className="w-[560px]"/></div>
      <div className="[grid-area:area2h2andp] content-end flex flex-col justify-between pt-16 ml-20">
        <p className="text-p max-w-[542px]">
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
        <h2 className="text-h3">Visualize and see the rhythm behind every rap verse</h2>
      </div>
    </div>
  );
};
