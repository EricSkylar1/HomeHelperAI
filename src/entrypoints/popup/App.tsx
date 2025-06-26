function App() {

  return (
    <div className='w-[400px] h-full flex-col'>
		<div className="bg-tech-blue text-white h-10">
			<h1 className="text-2xl font-bold font-display mb-4 ml-2">Home Helper AI</h1>
		</div>
      
      	<section className="text-gray-700 font-display text-center space-y-2 max-w-xl mx-auto bg-gray-50 p-2 rounded-xl overflow-hidden">
			<div className="h-auto">
				<div
				className="rounded-3xl p-1 transition-transform duration-150 animate-bubble-in"
				style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
				>
				Personalized listings based on your preferences and location.
				</div>
			</div>
			<div className="h-auto">
				<div
				className="rounded-3xl p-1 transition-transform duration-150 animate-bubble-in"
				style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
				>
				Smart filters cut through the noise.
				</div>
			</div>
			<div className="h-auto">
				<div
				className="rounded-3xl p-1 transition-transform duration-150 animate-bubble-in"
				style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
				>
				Works instantly on Zillow — no setup required.
				</div>
			</div>
		</section>

    </div>
  );
}

export default App;
