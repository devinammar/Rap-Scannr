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
    <div className="mt-[420px] px-[5vw] min-[1920px]:px-[288px] flex flex-col gap-8">

      {loading && (
        <p className="text-center text-black">
          Analyzing...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500">
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