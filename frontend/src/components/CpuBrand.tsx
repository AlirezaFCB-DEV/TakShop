"use client";

interface CpuBrandProps {
  creatorCompany: string;
  cpuModel: string;
  cpuModelFA: string;
}

const CpuBrand = ({ creatorCompany, cpuModel, cpuModelFA }: CpuBrandProps) => {
  return (
    <div className="relative text-center w-max h-max px-8 py-16 shadow-xl font-bold rounded-lg">
      <h3 className="text-2xl text-main-300">{creatorCompany}</h3>
      <h2 className="text-4xl text-main-500">{cpuModel}</h2>

      <h5 className="absolute bottom-3 translate-x-1/2 right-1/2">
        {cpuModelFA}
      </h5>
    </div>
  );
};

export default CpuBrand;
