import { useRapBattle } from "../../hooks/useRapBattle";

import { TitleAndArtist } from "../TitleAndArtist";
import { SPSOverTimeChart } from "../SPSOverTimeChart";
import { StatisticTable } from "../StatisticTable";
import { PeakSpeedInfo } from "../PeakSpeedInfo";
import { OverallComparison } from "../OverallComparison";

export const Area2 = ({ submittedUrls }) => {

  const {
    result,
    loading,
    error,
  } = useRapBattle(submittedUrls);

  if (!submittedUrls) return null;

  return (

    <div className="mt-[520px] px-[5vw] min-[1920px]:px-[288px] flex flex-col gap-8">

      {loading && (
        <p className="text-center">
          Analyzing...
        </p>
      )}

      {error && (
        <p className="text-red-500 text-center">
          {error}
        </p>
      )}

      {result && (
        <>

          <div className="flex gap-8 max-[812px]:flex-col">

            <div className="flex-1 flex flex-col gap-6">

              <TitleAndArtist
                title={result.song1.meta.title}
                artist={result.song1.meta.artist}
              />

              <SPSOverTimeChart
                data={result.song1.chart}
              />

              <StatisticTable
                stats={result.song1.stats}
              />

              <PeakSpeedInfo
                peakSPS={result.song1.stats.peakSPS}
                peakTime={result.song1.stats.peakTime}
              />

            </div>

            <div className="flex-1 flex flex-col gap-6">

              <TitleAndArtist
                title={result.song2.meta.title}
                artist={result.song2.meta.artist}
              />

              <SPSOverTimeChart
                data={result.song2.chart}
              />

              <StatisticTable
                stats={result.song2.stats}
              />

              <PeakSpeedInfo
                peakSPS={result.song2.stats.peakSPS}
                peakTime={result.song2.stats.peakTime}
              />

            </div>

          </div>

          <OverallComparison
            song1={result.song1}
            song2={result.song2}
          />

        </>
      )}

    </div>

  );

};