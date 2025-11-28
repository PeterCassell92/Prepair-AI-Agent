import toolsImage from 'figma:asset/77c28adf159003ec5479f771f90709b2b26ab9f5.png';
import elevenLabsLogo from 'figma:asset/35d95b547ca2825416da6dc3302847d1b83ede19.png';
import liveKitLogo from 'figma:asset/331a5a4cc5c1a4459d22bd34c5b060ab3b8a99ff.png';
import valyuLogo from 'figma:asset/4c187f35d9d25c12fd4b4a0d0c3df33e68b9646b.png';

{/* Solution Overview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-blue-600 mb-8 text-5xl lg:text-6xl">How Prepair Works</h2>
              <p className="text-2xl lg:text-3xl text-slate-700 mb-12 leading-relaxed">
                Prepair's AI agent analyzes your jobs, inventory, and local suppliers to ensure you're always prepared
              </p>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 text-2xl bg-blue-600 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="mb-3 text-3xl">Gap Analysis to maximise preparedness</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      Our AI Agent identifies any gaps in your inventory and creates a checklist of materials needed for each job. Tradesmen no longer lose time having to source missing materials mid-job.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 text-2xl bg-blue-600 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="mb-3 text-3xl">Voice Agent handles Procurement for you</h4>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <span className="text-blue-600 flex-shrink-0 mt-1">•</span>
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <img 
                              src={liveKitLogo} 
                              alt="LiveKit" 
                              className="h-10"
                            />
                          </div>
                          <p className="text-slate-600 text-xl leading-relaxed">
                            Prepair uses a <strong className="text-slate-900 text-2xl">LiveKit</strong> voice agent to understand your requirements
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <span className="text-blue-600 flex-shrink-0 mt-1">•</span>
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <img 
                              src={valyuLogo} 
                              alt="Valyu" 
                              className="h-12"
                            />
                          </div>
                          <p className="text-slate-600 text-xl leading-relaxed">
                            Prepair then uses <strong className="text-slate-900 text-2xl">Valyu</strong> to research local tool & material suppliers that may stock the needed items, prioritising locations close to your jobs
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <span className="text-blue-600 flex-shrink-0 mt-1">•</span>
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <img 
                              src={elevenLabsLogo} 
                              alt="ElevenLabs" 
                              className="h-12"
                            />
                          </div>
                          <p className="text-slate-600 text-xl leading-relaxed">
                            Prepair then autonomously calls hardware stores using <strong className="text-slate-900 text-2xl">ElevenLabs</strong> voice agent with telephony, checks availability and books a collection time that fits with your schedule
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 relative flex items-center justify-center">
              <div className="bg-white p-12 rounded-2xl shadow-2xl">
                <img 
                  src={toolsImage}
                  alt="Tools and Equipment"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>