import { useTrackAnalysis } from "../../hooks/useTrackAnalysis";

import { TitleAndArtist } from "../TitleAndArtist";
import { SPSOverTimeChart } from "../SPSOverTimeChart";
import { StatisticTable } from "../StatisticTable";
import { PeakSpeedInfo } from "../PeakSpeedInfo";

export const Area2 = ({ url }) => {

  const {
    result,
    loading,
    error,
  } = useTrackAnalysis(url);

  if (!url) return null;

  return (
    <div className="mt-[400px] pb-20 max-[768px]:pb-28 max-[480px]:pb-16 justify-self-center w-[calc(100vw-160px)] max-w-[calc(1920px-160px)] max-[768px]:w-[calc(100vw-112px)] max-[480px]:w-[calc(100vw-64px)] min-[1920px]:w-[1920px] min-[1920px]:justify-self-center flex flex-col gap-8">
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
          <TitleAndArtist
            title={result.meta.title}
            artist={result.meta.artist}
          />
          <SPSOverTimeChart
            data={result.chart}
          />
          <StatisticTable
            stats={result.stats}
          />
          <PeakSpeedInfo
            peakSPS={result.stats.peakSPS}
            peakTime={result.stats.peakTime}
          />
        </>
      )}
    </div>
  );
};