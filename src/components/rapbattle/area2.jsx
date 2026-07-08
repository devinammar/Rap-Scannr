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
    <div className="mt-[600px] pb-20 max-[768px]:pb-28 max-[480px]:pb-16 justify-self-center w-[calc(100vw-160px)] max-w-[calc(1920px-160px)] max-[768px]:w-[calc(100vw-112px)] max-[480px]:w-[calc(100vw-64px)] min-[1920px]:w-[1920px] min-[1920px]:justify-self-center flex flex-col gap-10 max-[480px]:gap-8">
      {loading && (
        <p className="text-p text-center text-black">
          Analyzing...
        </p>
      )}
      {error && (
        <p className="text-p text-center text-black">
          {error}
        </p>
      )}

      {result && (
        <>
          <div className="flex gap-8 max-[812px]:flex-col">
            <div className="flex-1 flex flex-col gap-10 max-[480px]:gap-8">
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
            <div className="flex-1 flex flex-col gap-10 max-[480px]:gap-8">
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