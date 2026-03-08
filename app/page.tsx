import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] font-sans flex flex-col items-center pb-8 overflow-x-hidden">

      {/* ===== TOP SECTION / VIEWPORT 1 ===== */}
      <div className="w-[92%] max-w-[1200px] bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-[calc(100vh-80px)] min-h-[680px] max-h-[900px] mt-[40px] px-12 md:px-16 py-12 flex flex-col relative">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between">
          <span className="text-[22px] font-bold text-black tracking-widest uppercase">
            FFCS
          </span>
          <button className="rounded-[8px] border-[1.5px] border-[#E5E7EB] bg-white px-10 py-2.5 text-[14px] font-semibold text-black hover:bg-gray-50 transition-colors shadow-sm">
            Login
          </button>
        </nav>

        {/* HERO */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 w-full gap-8 mt-4">

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center mt-[-40px]">
            <h1 className="text-[72px] xl:text-[86px] font-black text-black leading-[0.95] tracking-tighter mb-5">
              Build Your
              <br />
              Timetable
            </h1>
            <p className="max-w-[360px] text-[15px] text-gray-800 font-medium leading-[1.6] mb-8">
              Lorem Ipsum Dolor Sit Amet, Consectetur
              <br />
              Adipiscing Elit, Sed Do Eiusmod Tempor
            </p>
            <div className="flex gap-4">
              <button className="rounded-[8px] px-8 py-3.5 text-[14px] font-bold text-black border-[1.5px] border-[#A0C4FF] bg-[#A0C4FF] hover:bg-[#8ab2f2] transition-colors shadow-sm">
                Get Started
              </button>
              <button className="rounded-[8px] border-[1.5px] border-[#A0C4FF] px-8 py-3.5 text-[14px] font-bold text-black bg-white hover:bg-blue-50 transition-colors shadow-sm">
                Slot View
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-end shrink-0">
            <TimetableIllustration />
          </div>

        </div>
      </div>

      {/* ===== SPACER ===== */}
      <div className="h-[80px]" />

      {/* ===== MIDDLE SECTION / VIEWPORT 2 ===== */}
      <div className="w-[92%] max-w-[1200px] flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-80px)]">

        {/* Left Card: How This Site Works */}
        <div className="flex-[1.1] bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-12 flex flex-col items-center border border-gray-50">
          <h2 className="text-[26px] font-bold text-black mb-10 text-center w-full">
            How This Site Works?
          </h2>

          {/* Video Placeholder */}
          <div className="w-full h-[240px] rounded-[16px] border-[3px] border-black flex items-center justify-center relative bg-white overflow-hidden mb-12 shrink-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pb-4 pointer-events-none">
              <div className="transform scale-[0.6] flex gap-8 w-full max-w-[600px] mt-6 ml-[100px]">
                <div className="flex flex-col flex-1 pl-12 pt-4">
                  <div className="text-[54px] font-black leading-tight text-gray-400">Build Your<br />Timetable</div>
                  <div className="flex gap-3 mt-6">
                    <div className="w-24 h-8 bg-gray-300 rounded"></div>
                    <div className="w-24 h-8 bg-transparent border-[3px] border-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="w-[320px] h-44 bg-gray-50 rounded-xl flex flex-col p-5 border-[3px] border-gray-300 mt-2">
                  <div className="flex gap-4 justify-center">
                    <div className="w-5 h-10 bg-purple-200 rounded-full"></div>
                    <div className="w-5 h-10 bg-blue-200 rounded-full"></div>
                    <div className="w-5 h-10 bg-green-200 rounded-full"></div>
                    <div className="w-5 h-10 bg-yellow-200 rounded-full"></div>
                  </div>
                  <div className="w-full h-4 bg-gray-400 mt-4 mb-3 rounded-t"></div>
                  <div className="grid grid-cols-4 gap-2 w-full">
                    <div className="h-5 rounded bg-blue-200"></div><div className="h-5 rounded bg-green-200"></div><div className="h-5 rounded bg-yellow-200"></div><div className="h-5 rounded bg-purple-200"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play button */}
            <div className="w-16 h-16 bg-[#D1D5DB] rounded-full flex items-center justify-center z-10 cursor-pointer shadow-md mr-10 hover:bg-gray-300 transition-colors border-2 border-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="gray-800" className="ml-1 opacity-80">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6 w-[85%] mt-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex gap-6 items-center">
                <div className="w-[56px] h-[56px] rounded-full border-[2px] border-[#FDE047] flex items-center justify-center text-[22px] font-bold text-black flex-shrink-0 bg-white">
                  {num}
                </div>
                <p className="text-[12px] text-gray-600 leading-[1.6] font-medium pt-1">
                  Lorem ipsum dolor sit amet consectetur. Porttitor eu cursus arcu viverra eros at a sed dignissim. Nibh amet at nibh pulvinar accumsan at quisque orci.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: FAQ */}
        <div className="flex-1 bg-white rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-12 flex flex-col border border-gray-50">
          <h2 className="text-[18px] font-bold text-black w-full text-left mb-8 mt-2">
            Frequently asked questions:
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {/* Expanded Item */}
            <div className="rounded-[16px] border-[1.5px] border-[#A7F3D0] p-6 flex flex-col gap-5 bg-white shadow-sm">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-[14px] font-bold text-black">Why to use this site?</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" className="mt-[-2px]"><path d="M18 15l-6-6-6 6" /></svg>
              </div>
              <p className="text-[12px] text-gray-500 leading-[1.7] pr-2">
                Lorem ipsum dolor sit amet consectetur. Sed vitae proin enim amet consequat sit. Lorem convallis imperdiet at quis feugiat est dignissim in mi. A odio purus feugiat volutpat tellus felis amet vulputate urna. Consectetur fames phasellus varius diam pellentesque in. Vulputate nunc vitae quis cras tellus justo tincidunt morbi.
              </p>
            </div>

            {/* Collapsed Items */}
            {[
              ["Will it help me in my", "FFCS"],
              ["Do I need to be a VIT student to use", "this site?"],
              ["Lorem ipsum dolor sit amet", "consectetur."],
            ].map((lines, i) => (
              <div key={i} className="rounded-[16px] border-[1.5px] border-[#A7F3D0] px-6 py-[22px] flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
                <span className="text-[14px] font-bold text-black leading-tight">{lines[0]}<br />{lines[1]}</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== SPACER ===== */}
      <div className="h-[120px]" />

      {/* ===== FULL WIDTH FOOTER ===== */}
      <div className="w-[92%] max-w-[1200px] flex flex-col relative z-0 mb-[60px]">

        {/* Dark Header */}
        <div className="w-full h-[64px] bg-[#5B5B5B] rounded-t-[28px] relative z-10 shadow-md">
          {/* Bindings */}
          <div className="absolute top-[-25px] left-0 w-full flex justify-around px-8 md:px-20 z-20">
            {["#E9D5FF", "#A0C4FF", "#CAFFD0", "#FDFFB6", "#C4B5FD", "#CAFFD0", "#E9D5FF"].map((c, i) => (
              <div key={i} className="w-[24px] h-[50px] rounded-[12px] shadow-sm border border-black/5" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Main Footer Container (Light Gray Body) */}
        <div className="w-full bg-[#F3F4F6] border-x border-b border-gray-200 p-6 rounded-b-[28px] flex flex-col md:flex-row gap-5 relative z-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

          {/* Left Stack (FFCS + Buttons + Built With) */}
          <div className="flex-[1.8] flex flex-col gap-5">

            <div className="flex gap-5 flex-1 min-h-[160px]">

              {/* Left: FFCS White Box */}
              <div className="flex-[1] bg-white border border-gray-100 rounded-[20px] p-6 flex flex-col shadow-sm">
                <h3 className="text-[26px] font-black text-black tracking-widest uppercase mb-1">FFCS</h3>
                <p className="text-[10px] text-gray-500 leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                </p>
              </div>

              {/* Middle: 4 Buttons Grid White Box */}
              <div className="flex-[1.4] bg-white border border-gray-100 rounded-[20px] p-4 flex shadow-sm">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full h-full">
                  <button className="bg-[#A0C4FF] rounded-[12px] flex flex-row items-center px-4 py-2 gap-3 cursor-pointer hover:opacity-90 transition-opacity border-none">
                    <div className="text-[16px] bg-white/40 rounded flex items-center justify-center p-1 w-8 h-8 shrink-0">🗓</div>
                    <span className="text-[13px] font-bold text-black leading-tight text-left">Generate<br />timetable</span>
                  </button>
                  <button className="bg-[#CDB4DB] rounded-[12px] flex flex-row items-center px-4 py-2 gap-3 cursor-pointer hover:opacity-90 transition-opacity border-none">
                    <div className="text-[16px] bg-white/40 rounded flex items-center justify-center p-1 w-8 h-8 shrink-0">🕒</div>
                    <span className="text-[13px] font-bold text-black leading-tight text-left">View saved<br />timetables</span>
                  </button>
                  <button className="bg-[#CAFFD0] rounded-[12px] flex flex-row items-center px-4 py-2 gap-3 cursor-pointer hover:opacity-90 transition-opacity border-none">
                    <div className="w-8 h-8 rounded bg-[#A0E8AF] p-1.5 flex flex-wrap gap-[2px] items-center justify-center shrink-0">
                      <div className="w-[8px] h-[6px] bg-[#66B878] rounded-[1px]"></div><div className="w-[8px] h-[6px] bg-[#66B878] rounded-[1px]"></div>
                      <div className="w-[8px] h-[6px] bg-[#66B878] rounded-[1px]"></div><div className="w-[8px] h-[6px] bg-[#66B878] rounded-[1px]"></div>
                    </div>
                    <span className="text-[13px] font-bold text-black leading-tight text-left">View slots</span>
                  </button>
                  <button className="bg-[#FDFFB6] rounded-[12px] flex flex-row items-center px-4 py-2 gap-3 cursor-pointer hover:opacity-90 transition-opacity border-none">
                    <div className="w-8 h-8 flex flex-col items-center justify-center shrink-0">
                      <div className="w-[8px] h-[8px] bg-[#D4D761] rounded-full mb-[2px]"></div>
                      <div className="flex gap-[3px]"><div className="w-[8px] h-[8px] bg-[#D4D761] rounded-full"></div><div className="w-[8px] h-[8px] bg-[#D4D761] rounded-full"></div></div>
                    </div>
                    <span className="text-[13px] font-bold text-black leading-tight text-left">View team</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom: Built With */}
            <div className="h-[52px] bg-white border border-gray-100 shadow-sm rounded-[16px] flex items-center justify-center">
              <span className="text-[13px] font-bold text-black">
                Built with <span className="text-red-500 mx-0.5">❤️</span> by Microsoft Innovations Club
              </span>
            </div>

          </div>

          {/* Right Stack (Floating Letters & Get Updates) */}
          <div className="flex-[1] flex flex-col gap-5">

            <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-[20px] relative overflow-hidden min-h-[160px]">
              {/* Floating letters */}
              <div className="absolute top-6 left-6 bg-[#E9D5FF] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[-12deg] shadow-[2px_2px_0_rgba(182,156,196,0.3)] rounded-[6px] border border-[#d2b8e8] text-gray-800">C</div>
              <div className="absolute top-[90px] left-[65px] bg-[#FDFFB6] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[8deg] shadow-[2px_2px_0_rgba(226,230,158,0.3)] rounded-[6px] border border-[#e2e69e] text-gray-800">D</div>
              <div className="absolute top-6 left-[105px] bg-[#CAFFD0] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[15deg] shadow-[2px_2px_0_rgba(174,230,181,0.3)] rounded-[6px] border border-[#aee6b5] text-gray-800">G</div>
              <div className="absolute top-10 right-8 bg-[#A0E8AF] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[25deg] shadow-[2px_2px_0_rgba(125,199,141,0.3)] rounded-[6px] border border-[#7dc78d] text-gray-800">E</div>
              <div className="absolute top-6 right-[75px] bg-[#A0C4FF] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[-18deg] shadow-[2px_2px_0_rgba(138,174,226,0.3)] rounded-[6px] border border-[#8aaee2] text-gray-800">B</div>
              <div className="absolute top-[85px] right-[25px] bg-[#FDFFB6] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[-6deg] shadow-[2px_2px_0_rgba(226,230,158,0.3)] rounded-[6px] border border-[#e2e69e] text-gray-800">A</div>
              <div className="absolute top-[95px] right-[85px] bg-[#CDB4DB] w-[34px] h-[34px] flex items-center justify-center font-bold text-[15px] rotate-[22deg] shadow-[2px_2px_0_rgba(182,156,196,0.3)] rounded-[6px] border border-[#b69cc4] text-gray-800">F</div>
            </div>

            <div className="h-[52px] bg-white border border-gray-100 rounded-[16px] shadow-sm flex items-center p-1.5 gap-2">
              <input type="text" placeholder="Get updates" className="flex-1 rounded-[10px] px-3 text-[13px] text-black outline-none bg-transparent" />
              <button className="w-[50px] bg-[#A7F3D0] rounded-[10px] h-full flex items-center justify-center transition-opacity hover:opacity-80 text-[18px]">
                🔔
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

function TimetableIllustration() {
  const colors = [
    ["#A0C4FF", "#CAFFD0", "#E9D5FF", "#CAFFD0", "#FEF08A"],
    ["#A0C4FF", "#E9D5FF", "#FEF08A", "#E9D5FF", "#A0C4FF"],
    ["#A0C4FF", "#CAFFD0", "#CAFFD0", "#A0C4FF", "#E9D5FF"],
    ["#E9D5FF", "#FEF08A", "#E9D5FF", "#CAFFD0", "#FEF08A"],
  ];

  const bindings = [
    "#E9D5FF",
    "#A0C4FF",
    "#CAFFD0",
    "#FEF08A",
    "#C4B5FD",
    "#CAFFD0",
    "#E9D5FF",
  ];

  return (
    <div className="relative w-[500px] shrink-0 transform scale-[0.9] lg:scale-100 origin-right">
      <div className="absolute top-[1px] left-0 w-full flex justify-around px-[16px] z-10 transform -translate-y-[10px]">
        {bindings.map((color, i) => (
          <div
            key={i}
            className="w-[14px] h-[36px] rounded-full shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="h-[52px] bg-[#5B5B5B] rounded-t-[18px] mx-[2px]" />

      <div className="bg-white rounded-b-[18px] border-[1.5px] border-gray-100 p-[24px] shadow-sm">
        <div className="grid grid-cols-5 gap-4">
          {colors.flat().map((color, i) => (
            <div
              key={i}
              className="h-[34px] rounded-[6px]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
