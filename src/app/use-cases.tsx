import Image from 'next/image';

interface UseCasesProps {
  compact?: boolean;
}

export default function UseCases({ compact }: UseCasesProps) {
  return (
    <div className='w-full h-full flex p-10 bg-white rounded-2xl'>
      {/* Farming Solutions */}
      <div className="flex-1">
        <h2 className={compact ? "text-base font-bold mb-3 text-[#0B4619]" : "text-lg font-bold mb-6 text-[#0B4619]"}>FARMING SOLUTIONS</h2>
        <ul className={compact ? "space-y-3" : "space-y-6"}>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/yield-bag.png" alt="Yield Optimization" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Yield Optimization</div>
              {!compact && <div className="text-gray-600 text-xs">Maximize crop output with data-driven insights and smart farming tools.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/farmland.jpg" alt="Land Tokenization" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Land Tokenization</div>
              {!compact && <div className="text-gray-600 text-xs">Fractionalize land ownership and enable transparent, secure transactions.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/smilefarmers.webp" alt="Sustainable Practices" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Sustainable Practices</div>
              {!compact && <div className="text-gray-600 text-xs">Promote eco-friendly farming and traceable supply chains.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/yieldlogo.jpg" alt="Farmer Empowerment" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Farmer Empowerment</div>
              {!compact && <div className="text-gray-600 text-xs">Tools and resources to support smallholder and community farmers.</div>}
            </div>
          </li>
        </ul>
      </div>

      {/* Functional Use Cases */}
      <div className="flex-1">
        <h2 className={compact ? "text-base font-bold mb-3 text-[#0B4619]" : "text-lg font-bold mb-6 text-[#0B4619]"}>FUNCTIONAL USE CASES</h2>
        <ul className={compact ? "space-y-3" : "space-y-6"}>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/yield-car.png" alt="Decentralized Ownership" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Decentralized Ownership</div>
              {!compact && <div className="text-gray-600 text-xs">Enable shared, transparent ownership of land and assets.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/hp2.jpeg" alt="Crop Insurance" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Crop Insurance</div>
              {!compact && <div className="text-gray-600 text-xs">Automated, blockchain-based insurance for risk mitigation.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/hp3.jpeg" alt="Marketplace" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Marketplace</div>
              {!compact && <div className="text-gray-600 text-xs">Connect buyers and sellers for crops, land, and services.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/hp1.jpeg" alt="Data Integrity" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Data Integrity</div>
              {!compact && <div className="text-gray-600 text-xs">Immutable records for land, yield, and supply chain data.</div>}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#9DC45F]/20 p-1 rounded-full">
              <Image src="/yield.png" alt="Community Rewards" width={compact ? 20 : 32} height={compact ? 20 : 32} />
            </span>
            <div>
              <div className="font-semibold text-[#0B4619] text-sm">Community Rewards</div>
              {!compact && <div className="text-gray-600 text-xs">Incentivize sustainable practices and community engagement.</div>}
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
} 