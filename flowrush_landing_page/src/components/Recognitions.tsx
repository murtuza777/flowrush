import { TOOLS_ASSETS } from '../assets';

type RecognitionItem = {
	name: string;
	img?: string | null;
};

const items: RecognitionItem[] = [
	{ name: 'CLUTCH', img: TOOLS_ASSETS.clutch },
	{ name: 'GOOD FIRMS', img: null },
	{ name: 'DESIGN RUSH', img: null },
	{ name: 'TRUST PILOT', img: null },
	{ name: 'DMCA PROTECTED', img: null },
];

export default function Recognitions() {
	return (
		<section className="relative w-full py-8 md:py-10 px-0">
			<div className="text-center mb-6">
				<h2 className="font-['Poppins'] font-bold text-[24px] md:text-[32px] leading-[1.1]">
					<span className="text-[#146ef6]">Awards &amp; </span>
					<span className="text-slate-50">Recognitions</span>
				</h2>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 px-3 md:px-6">
				{items.map((item, idx) => (
					<div
						key={idx}
						className="h-[92px] md:h-[110px] rounded-xl border border-white/10 bg-[rgba(26,26,36,0.6)] flex items-center justify-center p-3"
					>
						{item.img ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={item.img}
								alt={item.name}
								className="max-h-full max-w-[80%] object-contain opacity-90"
							/>
						) : (
							<span className="font-['Poppins'] text-[12px] md:text-[14px] tracking-wide text-white/90">{item.name}</span>
						)}
					</div>
				))}
			</div>
		</section>
	);
}


