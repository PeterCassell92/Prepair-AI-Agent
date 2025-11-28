import toolsImage from './logos/prepairLogo.png';
import elevenLabsLogo from './logos/elevenlabsfull.png';
import liveKitLogo from './logos/livekitEXTRA.png';
import valyuLogo from './logos/ValyuFull.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Solution Overview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header with Logo and Title inline */}
          <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <img
                src={toolsImage}
                alt="Prepair Logo"
                className="h-20"
              />
            </div>
            <div className="flex-1 min-w-[300px] max-w-3xl">
              <h2 className="mb-4 text-4xl lg:text-5xl" style={{color: '#2d7d95'}}>How Prepair Works</h2>
              <p className="text-xl lg:text-2xl leading-relaxed" style={{color: '#000000'}}>
                Prepair's AI agent analyzes your jobs, inventory, and local suppliers to ensure you're always prepared
              </p>
            </div>
          </div>

          {/* Workflow Diagram */}
          <div className="flex flex-col items-center space-y-8 max-w-5xl mx-auto">

            {/* Gap Analysis Node */}
            <div className="text-white rounded-2xl p-8 shadow-xl w-full max-w-2xl" style={{backgroundColor: '#48c8ef'}}>
              <h3 className="text-3xl font-bold mb-4">Gap Analysis</h3>
              <p className="text-xl leading-relaxed">
                Our AI Agent identifies any gaps in your inventory and creates a checklist of materials needed for each job. Tradesmen no longer lose time having to source missing materials mid-job.
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-12" style={{backgroundColor: '#000000'}}></div>
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px]" style={{borderTopColor: '#000000'}}></div>
            </div>

            {/* Decision Node */}
            <div className="relative text-white rounded-2xl p-8 shadow-xl w-full max-w-2xl" style={{backgroundColor: '#ffcb5a'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded-full text-lg font-semibold" style={{backgroundColor: '#77959e'}}>
                Decision
              </div>
              <h3 className="text-3xl font-bold text-center mt-2">Any tools / materials missing?</h3>
            </div>

            {/* Fork: Two paths */}
            <div className="grid grid-cols-2 gap-16 w-full max-w-4xl">

              {/* NO Path */}
              <div className="flex flex-col items-center space-y-6">
                <div className="text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg" style={{backgroundColor: '#ffcb5a'}}>
                  NO
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12" style={{backgroundColor: '#000000'}}></div>
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px]" style={{borderTopColor: '#000000'}}></div>
                </div>
                <div id="confirmed-ready" className="text-white rounded-2xl p-8 shadow-xl w-full" style={{backgroundColor: '#37c94f'}}>
                  <h3 className="text-3xl font-bold text-center">Confirmed Ready</h3>
                  <p className="text-xl mt-4 text-center">All materials available - ready to work!</p>
                </div>
              </div>

              {/* YES Path - Procurement Agent */}
              <div className="flex flex-col items-center space-y-6">
                <div className="text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg" style={{backgroundColor: '#ffcb5a'}}>
                  YES
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-12" style={{backgroundColor: '#000000'}}></div>
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px]" style={{borderTopColor: '#000000'}}></div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border-4" style={{borderColor: '#48c8ef'}}>
                  <h3 className="text-3xl font-bold mb-6" style={{color: '#2d7d95'}}>Procurement Agent</h3>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="mb-3">
                        <img
                          src={liveKitLogo}
                          alt="LiveKit"
                          className="w-full h-auto max-h-16 object-contain"
                        />
                      </div>
                      <p className="text-lg leading-relaxed text-center" style={{color: '#000000'}}>
                        Voice agent to understand your requirements
                      </p>
                    </div>

                    <div className="p-4 rounded-xl" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="mb-3">
                        <img
                          src={valyuLogo}
                          alt="Valyu"
                          className="w-full h-auto max-h-16 object-contain"
                        />
                      </div>
                      <p className="text-lg leading-relaxed text-center" style={{color: '#000000'}}>
                        Research local suppliers, prioritising locations close to your jobs
                      </p>
                    </div>

                    <div className="p-4 rounded-xl" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="mb-3">
                        <img
                          src={elevenLabsLogo}
                          alt="ElevenLabs"
                          className="w-full h-auto max-h-16 object-contain"
                        />
                      </div>
                      <p className="text-lg leading-relaxed text-center" style={{color: '#000000'}}>
                        Autonomously call stores, check availability and book collection
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Connecting arrow from procurement to confirmed ready with right angles */}
            <div className="relative w-full max-w-4xl h-32">
              <svg className="absolute w-full h-full" style={{overflow: 'visible'}}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#000000" />
                  </marker>
                </defs>
                {/* Path: down from procurement, left across, up to confirmed ready */}
                <path
                  d="M 75% 0 L 75% 50 L 25% 50 L 25% 0"
                  stroke="#000000"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
              {/* Materials Secured label */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-white px-6 py-2 rounded-full text-lg font-semibold" style={{backgroundColor: '#37c94f'}}>
                  Materials Secured
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
