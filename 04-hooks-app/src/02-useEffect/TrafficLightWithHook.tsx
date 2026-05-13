import { useTraficLight } from "../hooks/useTraficLight";

export const TrafficLightWithHook = () => {

  const { countdown, countdownStyle, greenLightColor,redLightColor,yellowLightColor} = useTraficLight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-2xl">Semaforo con use Effect </h1>
        <h2 className="text-white text-2xl">CountDow {countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 easy-linear"
          style={{width: countdownStyle}}
          >
          </div>
        </div>

        <div className={`w-32 h-32 rounded-full ${redLightColor}`}></div>

        <div className={`w-32 h-32 ${ yellowLightColor} rounded-full`}></div>
        <div className={`w-32 h-32 ${ greenLightColor } rounded-full`}></div>
      </div>
    </div>
  );
};